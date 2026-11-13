
/* ToolBox500 — Conçu et maintenu par AYI AYITE ARYUS OBATOBY. */
import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import type { Session } from '@supabase/supabase-js'
import {
  ArrowDownRight, ArrowRight, AudioLines, Bookmark, Boxes, BriefcaseBusiness,
  Check, ChevronDown, ChevronRight, Clock3, Code2, Command, Compass, FileImage, FileText,
  Film, Flame, FolderOpen, Grid2X2, Heart, Image, LayoutDashboard, LifeBuoy, LogIn, Menu,
  Moon, MoreHorizontal, Palette, Search, Settings2, ShieldCheck, Sparkles, Sun, WandSparkles,
  X, Zap, Brain, Share2, Megaphone, Wallet, Calculator, PenLine, Globe, Files, Terminal, Plug
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { supabase, supabaseConfigured } from './supabase'
import { TOOL_REGISTRY } from './toolRegistry'
import { getExternalToolUrl } from './toolLinks'

type Category = {
  id: string
  name: string
  icon: string
  sort_order: number
}

type Tool = {
  id: string
  slug?: string
  name: string
  description: string
  category: string
  icon: string
  color: string
  badge?: string
  popular?: boolean
  route?: string
  external_url?: string
  tool_type?: string
  mode?: string
}

type AuthMode = 'login' | 'signup' | 'reset'

const fallbackTools: Tool[] = TOOL_REGISTRY.map((item, index) => ({
  id: item.id,
  slug: item.id,
  mode: item.mode,
  name: item.name,
  description: item.description,
  category: item.category,
  icon: item.icon,
  color: item.color,
  external_url: getExternalToolUrl(item),
  badge: index < 20 ? 'À découvrir' : undefined,
  popular: index < 20,
}))

const demoCategories: Category[] = [
  { id: 'all', name: 'Tous les outils', icon: 'grid', sort_order: 0 },
  ...Array.from(new Set(TOOL_REGISTRY.map(item => item.category))).map((name, i) => ({
    id: `demo-${i}`,
    name,
    icon: name.startsWith('Applications ChatGPT')
      ? 'plug'
      : name === 'Finance'
        ? 'wallet'
        : name === 'SEO'
          ? 'search'
          : 'grid',
    sort_order: i + 1,
  })),
]

const categoryIcons: Record<string, LucideIcon> = {
  grid: Grid2X2,
  plug: Plug,
  brain: Brain,
  image: Image,
  'file-pdf': FileText,
  video: Film,
  'audio-lines': AudioLines,
  code: Code2,
  terminal: Terminal,
  zap: Zap,
  'briefcase-business': BriefcaseBusiness,
  'share-2': Share2,
  megaphone: Megaphone,
  search: Search,
  'shield-check': ShieldCheck,
  wallet: Wallet,
  calculator: Calculator,
  palette: Palette,
  'pen-line': PenLine,
  globe: Globe,
  files: Files,
  sparkles: Sparkles,
}

const iconFor = (name: string) => {
  const props = { size: 20, strokeWidth: 1.8 }

  switch (name) {
    case 'image':
      return <FileImage {...props}/>
    case 'file':
      return <FileText {...props}/>
    case 'spark':
      return <Sparkles {...props}/>
    case 'folder':
      return <FolderOpen {...props}/>
    case 'palette':
      return <WandSparkles {...props}/>
    case 'clock':
      return <Clock3 {...props}/>
    case 'code':
      return <Code2 {...props}/>
    default: {
      const Icon = categoryIcons[name] || AudioLines
      return <Icon {...props}/>
    }
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tous les outils')
  const [categories, setCategories] = useState<Category[]>(demoCategories)
  const [tools, setTools] = useState<Tool[]>(fallbackTools)
  const [usingDemo, setUsingDemo] = useState(false)
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('tb300-favorites') || '[]')
  )
  const [showFavorites, setShowFavorites] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [notice, setNotice] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [visibleCount, setVisibleCount] = useState(24)
  const [session, setSession] = useState<Session | null>(null)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const [authBusy, setAuthBusy] = useState(false)
  const [authError, setAuthError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const notify = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3200)
  }

  // Authentification : récupération de la session
  useEffect(() => {
    if (!supabase) return

    const client = supabase
    let mounted = true

    client.auth.getSession().then(({ data }) => {
      if (mounted) {
        setSession(data.session)
      }
    })

    const { data: listener } = client.auth.onAuthStateChange(
      (_event, nextSession) => {
        if (mounted) {
          setSession(nextSession)
        }
      }
    )

    return () => {
      mounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  // Chargement des catégories et des outils
  useEffect(() => {
    if (!supabase) {
      setCategories(demoCategories)
      setTools(fallbackTools)
      setUsingDemo(false)
      return
    }

    const client = supabase
    let cancelled = false

    const load = async () => {
      const [
        { data: cats, error: catError },
        { data: rows, error: toolError },
      ] = await Promise.all([
        client
          .from('categories')
          .select('id,name,icon,sort_order')
          .eq('is_active', true)
          .order('sort_order'),

        client
          .from('tools')
          .select('id,name,slug,short_description,icon,category_id,tool_type,external_url,launch_path,is_featured,sort_order,categories(name)')
          .eq('is_active', true)
          .order('sort_order'),
      ])

      if (cancelled) return

      if (!catError && cats?.length) {
        const remoteNames = new Set(cats.map((cat: any) => cat.name))

        const localCategories = Array.from(
          new Set(TOOL_REGISTRY.map(item => item.category))
        )
          .filter(name => !remoteNames.has(name))
          .map((name, index) => ({
            id: `local-${index}`,
            name,
            icon: name.startsWith('Applications ChatGPT')
              ? 'plug'
              : name === 'Finance'
                ? 'wallet'
                : name === 'SEO'
                  ? 'search'
                  : 'grid',
            sort_order: 100 + index,
          }))

        setCategories([
          {
            id: 'all',
            name: 'Tous les outils',
            icon: 'grid',
            sort_order: 0,
          },
          ...cats,
          ...localCategories,
        ])
      }

      if (!toolError && rows) {
        const mapped: Tool[] = rows.map((row: any, index: number) => {
          const definition = TOOL_REGISTRY.find(
            item => item.id === row.slug
          )

          return {
            id: row.id,
            slug: row.slug,
            mode: definition?.mode || 'writing',
            name: definition?.name || row.name,
            description:
              definition?.description ||
              row.short_description ||
              'Découvrez cet outil.',
            category:
              definition?.category ||
              row.categories?.name ||
              'Autres',
            icon: definition?.icon || row.icon || 'spark',
            color:
              definition?.color ||
              ['violet', 'blue', 'orange', 'green', 'pink', 'cyan'][index % 6],
            badge: row.is_featured ? 'À découvrir' : undefined,
            popular: row.is_featured,
            route: row.launch_path || undefined,
            external_url: row.external_url || undefined,
            tool_type: row.tool_type,
          }
        })

        const remoteSlugs = new Set(rows.map((row: any) => row.slug))

        const localAdditions = fallbackTools.filter(
          tool => !remoteSlugs.has(tool.slug || tool.id)
        )

        setTools([...mapped, ...localAdditions])
        setUsingDemo(false)
      } else if (toolError) {
        setTools(fallbackTools)
        setUsingDemo(false)
        notify(
          'Catalogue distant indisponible : les liens des 500 outils restent accessibles.'
        )
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  // Chargement des favoris de l'utilisateur connecté
  useEffect(() => {
    if (!supabase || !session?.user) return

    const client = supabase
    let cancelled = false

    const loadFavorites = async () => {
      const { data, error } = await client
        .from('favorites')
        .select('tool_id')
        .eq('user_id', session.user.id)

      if (!cancelled && !error && data) {
        setFavorites(data.map(item => item.tool_id))
      }
    }

    void loadFavorites()

    return () => {
      cancelled = true
    }
  }, [session?.user.id])

  const filtered = useMemo(
    () =>
      tools.filter(tool => {
        const categoryMatch =
          activeCategory === 'Tous les outils' ||
          tool.category === activeCategory

        const searchMatch = `${tool.name} ${tool.description} ${tool.category}`
          .toLowerCase()
          .includes(query.toLowerCase())

        const favoriteMatch =
          !showFavorites || favorites.includes(tool.id)

        return categoryMatch && searchMatch && favoriteMatch
      }),
    [tools, activeCategory, query, showFavorites, favorites]
  )

  const visibleTools = filtered.slice(0, visibleCount)

  const destinationFor = (tool: Tool) => {
    const definition = TOOL_REGISTRY.find(
      item => item.id === tool.slug || item.id === tool.id
    )

    const url = definition
      ? getExternalToolUrl(definition)
      : tool.external_url || ''

    try {
      return new URL(url).hostname.replace(/^www\./, '')
    } catch {
      return 'Site externe'
    }
  }

  const toggleFavorite = async (id: string) => {
    const exists = favorites.includes(id)

    const next = exists
      ? favorites.filter(x => x !== id)
      : [...favorites, id]

    setFavorites(next)

    if (
      !session?.user ||
      !supabase ||
      id.startsWith('demo-') ||
      !/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(id)
    ) {
      localStorage.setItem('tb300-favorites', JSON.stringify(next))

      if (session?.user && id.startsWith('demo-')) {
        notify(
          'Cet outil de démonstration ne peut pas encore être synchronisé.'
        )
      }

      return
    }

    const client = supabase

    const result = exists
      ? await client
          .from('favorites')
          .delete()
          .eq('user_id', session.user.id)
          .eq('tool_id', id)
      : await client
          .from('favorites')
          .insert({ user_id: session.user.id, tool_id: id })

    if (result.error) {
      setFavorites(favorites)
      notify(`Favori non enregistré : ${result.error.message}`)
    }
  }

  const chooseCategory = (name: string) => {
    setActiveCategory(name)
    setShowFavorites(false)
    setVisibleCount(24)
    setMobileOpen(false)
  }

  const openAuth = (mode: AuthMode = 'login') => {
    setAuthMode(mode)
    setAuthError('')
    setAuthOpen(true)
  }

  // Connexion, inscription et réinitialisation du mot de passe
  const submitAuth = async (event: FormEvent) => {
    event.preventDefault()
    setAuthError('')

    if (!supabase) {
      setAuthError(
        'Ajoutez la clé Publishable Supabase dans le fichier .env pour activer les comptes.'
      )
      return
    }

    const client = supabase
    setAuthBusy(true)

    try {
      if (authMode === 'login') {
        const { data, error } = await client.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        if (data.user) {
          await client.from('profiles').upsert({
            id: data.user.id,
            full_name: data.user.user_metadata?.full_name || null,
          })
        }

        setAuthOpen(false)
        notify('Connexion réussie. Vos favoris seront synchronisés.')
      } else if (authMode === 'signup') {
        const { data, error } = await client.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        })

        if (error) throw error

        if (data.user && data.session) {
          await client.from('profiles').upsert({
            id: data.user.id,
            full_name: fullName || null,
          })

          notify('Votre compte a été créé.')
        } else {
          notify(
            'Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse.'
          )
        }

        setAuthMode('login')
      } else {
        const { error } = await client.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin,
        })

        if (error) throw error

        notify(
          'Si cette adresse est enregistrée, un lien de réinitialisation sera envoyé.'
        )

        setAuthMode('login')
      }
    } catch (error) {
      setAuthError(
        error instanceof Error
          ? error.message
          : 'Une erreur est survenue.'
      )
    } finally {
      setAuthBusy(false)
    }
  }

  const logout = async () => {
    if (!supabase) return

    const client = supabase
    const { error } = await client.auth.signOut()

    if (error) {
      notify(error.message)
    } else {
      notify('Vous êtes déconnecté.')
    }
  }

  // Ouverture des outils sur les sites de leurs éditeurs
  const launchTool = async (tool: Tool) => {
    const definition = TOOL_REGISTRY.find(
      item => item.id === tool.slug || item.id === tool.id
    ) || TOOL_REGISTRY.find(
      item =>
        item.name === tool.name &&
        item.category === tool.category
    )

    const destination = definition
      ? getExternalToolUrl(definition)
      : tool.external_url

    if (destination && /^https:\/\//i.test(destination)) {
      const opened = window.open(
        destination,
        '_blank',
        'noopener,noreferrer'
      )

      if (!opened) {
        notify(
          'Autorisez les fenêtres contextuelles pour ouvrir cet outil.'
        )
      }
    } else {
      notify(
        'Le lien externe de cet outil n’est pas encore renseigné.'
      )
      return
    }

    if (
      session?.user &&
      supabase &&
      /^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(tool.id)
    ) {
      const client = supabase

      const { error } = await client
        .from('usage_history')
        .insert({
          user_id: session.user.id,
          tool_id: tool.id,
        })

      if (error) {
        console.warn(
          'Historique non enregistré:',
          error.message
        )
      }
    }
  }

  const selectedCategoryCount = tools.length

  const displayedCategories = showAll
    ? categories
    : categories.slice(0, 9)

  return (
    <div className={`app-shell ${dark ? 'theme-dark' : 'theme-light'}`}>
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">
            <Boxes size={21}/>
          </div>

          <div>
            <strong>toolbox<span>500</span></strong>
            <small>YOUR DIGITAL WORKSPACE</small>
          </div>

          <button
            className="icon-button mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer"
          >
            <X/>
          </button>
        </div>

        <button
          className="workspace-switch"
          onClick={() =>
            session
              ? notify('Votre espace personnel est actif.')
              : openAuth()
          }
        >
          <div className="workspace-avatar">
            {session?.user.email?.[0]?.toUpperCase() || 'T'}
          </div>

          <span>
            <b>
              {session?.user.user_metadata?.full_name ||
                session?.user.email ||
                'Espace personnel'}
            </b>
            <small>
              {session ? 'Compte connecté' : 'Offre gratuite'}
            </small>
          </span>

          <ChevronDown size={15}/>
        </button>

        <div className="side-label">MENU PRINCIPAL</div>

        <nav className="side-nav">
          <button
            className={`nav-item ${!showFavorites ? 'active' : ''}`}
            onClick={() => {
              chooseCategory('Tous les outils')
              setShowFavorites(false)
            }}
          >
            <LayoutDashboard/>
            <span>Vue d’ensemble</span>
          </button>

          <button
            className={`nav-item ${showFavorites ? 'active' : ''}`}
            onClick={() => setShowFavorites(true)}
          >
            <Heart/>
            <span>Mes favoris</span>
            <em>{favorites.length}</em>
          </button>

          <button
            className="nav-item"
            onClick={() =>
              notify(
                session
                  ? 'L’historique détaillé sera ajouté dans la prochaine étape.'
                  : 'Connectez-vous pour retrouver votre historique.'
              )
            }
          >
            <Clock3/>
            <span>Récemment utilisés</span>
          </button>

          <button
            className="nav-item"
            onClick={() => {
              setShowFavorites(false)
              setActiveCategory('Tous les outils')
              notify('Explorez les catégories pour découvrir les outils.')
            }}
          >
            <Compass/>
            <span>Découvrir</span>
            <i className="new-dot"/>
          </button>
        </nav>

        <div className="side-label category-label">
          CATÉGORIES
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Réduire' : 'Tout voir'}
          </button>
        </div>

        <nav className="side-nav category-nav">
          {displayedCategories.map(cat => {
            const Icon = categoryIcons[cat.icon] || Grid2X2

            const count =
              cat.id === 'all'
                ? tools.length
                : tools.filter(t => t.category === cat.name).length

            return (
              <button
                key={cat.id}
                className={`nav-item ${
                  activeCategory === cat.name && !showFavorites
                    ? 'active'
                    : ''
                }`}
                onClick={() => chooseCategory(cat.name)}
              >
                <Icon/>
                <span>{cat.name}</span>
                <small>{count}</small>
              </button>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">
              <LifeBuoy size={17}/>
            </div>

            <b>Besoin d’un coup de main ?</b>

            <p>
              Retrouvez nos conseils pour tirer le meilleur de vos outils.
            </p>

            <button
              onClick={() =>
                notify('Le centre d’aide sera bientôt disponible.')
              }
            >
              Centre d’aide <ArrowRight size={13}/>
            </button>
          </div>

          <button
            className="nav-item"
            onClick={() =>
              notify('Les paramètres seront bientôt disponibles.')
            }
          >
            <Settings2/>
            <span>Paramètres</span>
          </button>

          <div className="user-row">
            <div className="user-avatar">
              {session?.user.email?.[0]?.toUpperCase() || 'A'}
            </div>

            <div>
              <b>
                {session?.user.user_metadata?.full_name ||
                  session?.user.email ||
                  'Visiteur'}
              </b>
              <small>
                {session ? 'Compte connecté' : 'Mode découverte'}
              </small>
            </div>

            {session ? (
              <button
                className="plain-icon"
                onClick={logout}
                title="Se déconnecter"
              >
                ↗
              </button>
            ) : (
              <MoreHorizontal size={19}/>
            )}
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button
            className="icon-button mobile-menu"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu/>
          </button>

          <div className="breadcrumb">
            Espace de travail
            <ChevronRight size={14}/>
            <b>
              {showFavorites
                ? 'Mes favoris'
                : activeCategory === 'Tous les outils'
                  ? 'Vue d’ensemble'
                  : activeCategory}
            </b>
          </div>

          <div className="top-actions">
            <div className="status-pill">
              <span/>
              {supabaseConfigured
                ? 'Base de données connectée'
                : 'Mode aperçu'}
            </div>

            <button
              className="icon-button"
              onClick={() => setDark(!dark)}
              aria-label="Changer le thème"
            >
              {dark ? <Sun/> : <Moon/>}
            </button>

            {session ? (
              <button className="login-button" onClick={logout}>
                Se déconnecter
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => openAuth()}
              >
                <LogIn size={16}/> Se connecter
              </button>
            )}
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"/>
                LE CATALOGUE D’OUTILS WEB
              </div>

              <h1>
                Les bons outils,
                <br/>
                <span>sans perdre de temps.</span>
              </h1>

              <p>
                Une sélection de services en ligne utiles, classés par besoin
                et accessibles en un clic.
              </p>

              <div className="hero-note">
                <span className="hero-note-dot"/>
                Catalogue indépendant
                <i/>
                Liens directs vers les éditeurs
                <i/>
                Accès gratuit à ToolBox500
              </div>
            </div>
          </section>

          <section className="search-panel">
            <div className="search-input-wrap">
              <Search size={20}/>

              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Que cherchez-vous ? Ex. : retoucher une image, convertir un PDF…"
                aria-label="Rechercher un outil"
              />

              <kbd>
                <Command size={11}/> K
              </kbd>
            </div>

            <div className="search-hint">
              <span>Suggestions :</span>
              <button onClick={() => setQuery('PDF')}>PDF</button>
              <button onClick={() => setQuery('image')}>Images</button>
              <button onClick={() => setQuery('IA')}>IA</button>
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">
                <Grid2X2/>
              </div>
              <div>
                <small>OUTILS CHARGÉS</small>
                <strong>
                  {selectedCategoryCount}
                  <span>{usingDemo ? '*' : ''}</span>
                </strong>
                <p>
                  {usingDemo ? 'Démonstration' : 'Depuis votre catalogue'}
                </p>
              </div>
              <div className="stat-decoration">500</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <FolderOpen/>
              </div>
              <div>
                <small>CATÉGORIES</small>
                <strong>{categories.length - 1}</strong>
                <p>Pour chaque besoin</p>
              </div>
              <div className="stat-decoration">
                {categories.length - 1}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <Flame/>
              </div>
              <div>
                <small>OUTILS POPULAIRES</small>
                <strong>{tools.filter(t => t.popular).length}</strong>
                <p>Mis en avant</p>
              </div>
              <div className="stat-decoration">24</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <ShieldCheck/>
              </div>
              <div>
                <small>ACCÈS</small>
                <strong>Libre</strong>
                <p>Sans inscription obligatoire</p>
              </div>
              <div className="stat-decoration">
                <Check/>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <span/> LE CATALOGUE
                </div>

                <h2>
                  {showFavorites
                    ? 'Vos outils favoris'
                    : query
                      ? 'Résultats de recherche'
                      : activeCategory === 'Tous les outils'
                        ? 'Explorer les outils'
                        : activeCategory}
                </h2>

                <p>
                  {showFavorites
                    ? 'Vos raccourcis enregistrés.'
                    : `${filtered.length} service${
                        filtered.length > 1 ? 's' : ''
                      } correspondant${
                        filtered.length > 1 ? 's' : ''
                      } à votre sélection. Chaque carte ouvre le site de son éditeur.`}
                </p>
              </div>

              <button
                className="text-link"
                onClick={() => {
                  setShowAll(true)
                  setActiveCategory('Tous les outils')
                  setShowFavorites(false)
                }}
              >
                Explorer le catalogue <ArrowRight size={16}/>
              </button>
            </div>

            <div className="tool-grid">
              {filtered.length ? (
                visibleTools.map(tool => (
                  <article className="tool-card" key={tool.id}>
                    <div className="tool-card-top">
                      <div className={`tool-icon ${tool.color}`}>
                        {iconFor(tool.icon)}
                      </div>

                      <div className="tool-card-actions">
                        {tool.badge && (
                          <span
                            className={`tool-badge ${
                              tool.badge === 'Nouveau'
                                ? 'badge-new'
                                : ''
                            }`}
                          >
                            {tool.badge}
                          </span>
                        )}

                        <button
                          className={`favorite-button ${
                            favorites.includes(tool.id)
                              ? 'is-favorite'
                              : ''
                          }`}
                          onClick={() => void toggleFavorite(tool.id)}
                          aria-label="Ajouter aux favoris"
                        >
                          <Bookmark
                            size={17}
                            fill={
                              favorites.includes(tool.id)
                                ? 'currentColor'
                                : 'none'
                            }
                          />
                        </button>
                      </div>
                    </div>

                    <div className="tool-category">
                      {tool.category}
                    </div>

                    <h3>{tool.name}</h3>

                    <p>{tool.description}</p>

                    <div className="tool-provider">
                      <Globe size={13}/>
                      <span>{destinationFor(tool)}</span>
                      <small>Site partenaire</small>
                    </div>

                    <button
                      className="launch-button"
                      onClick={() => void launchTool(tool)}
                    >
                      Visiter le site <ArrowUpRightIcon/>
                    </button>
                  </article>
                ))
              ) : (
                <div className="empty-state">
                  <Search size={25}/>

                  <b>
                    {showFavorites
                      ? 'Aucun favori pour le moment'
                      : 'Aucun outil trouvé'}
                  </b>

                  <span>
                    {showFavorites
                      ? 'Enregistrez un outil avec le marque-page pour le retrouver ici.'
                      : 'Essayez un autre terme ou changez de catégorie.'}
                  </span>

                  <button
                    onClick={() => {
                      setQuery('')
                      setShowFavorites(false)
                      setActiveCategory('Tous les outils')
                    }}
                  >
                    Réinitialiser
                  </button>
                </div>
              )}
            </div>

            {filtered.length > visibleCount && (
              <div className="catalog-footer">
                <span>
                  {visibleTools.length} outils affichés sur {filtered.length}
                </span>

                <button
                  onClick={() =>
                    setVisibleCount(count => count + 24)
                  }
                >
                  Afficher 24 outils de plus <ArrowRight size={15}/>
                </button>
              </div>
            )}

            {filtered.length > 0 && filtered.length <= visibleCount && (
              <div className="catalog-footer">
                <span>{filtered.length} outils affichés</span>
                <span>Vous êtes à jour.</span>
              </div>
            )}
          </section>

          <section className="bottom-banner">
            <div className="banner-spark">
              <Sparkles/>
            </div>

            <div>
              <b>Vous connaissez un service utile ?</b>
              <p>
                ToolBox500 référence des outils indépendants. Les services
                restent proposés et hébergés par leurs éditeurs.
              </p>
            </div>

            <button
              onClick={() =>
                notify(
                  'Merci ! La suggestion d’outil sera bientôt disponible.'
                )
              }
            >
              Suggérer un outil <ArrowRight size={15}/>
            </button>

            <div className="banner-glow"/>
          </section>

          <footer>
            <span>
              © 2026 ToolBox500 · AYI AYITE ARYUS OBATOBY
            </span>

            <span>
              Un catalogue indépendant de services web. ToolBox500
              n’héberge pas les outils référencés.
            </span>

            <div>
              <a href="#confidentialite">Confidentialité</a>
              <a href="#conditions">Conditions</a>
            </div>
          </footer>
        </div>
      </main>

      {mobileOpen && (
        <button
          className="mobile-scrim"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
        />
      )}

      {authOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={e => {
            if (e.target === e.currentTarget) {
              setAuthOpen(false)
            }
          }}
        >
          <section
            className="auth-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
          >
            <button
              className="modal-close"
              onClick={() => setAuthOpen(false)}
              aria-label="Fermer"
            >
              <X size={18}/>
            </button>

            <div className="modal-brand">
              <div className="brand-mark">
                <Boxes size={20}/>
              </div>
              <span>
                toolbox<strong>500</strong>
              </span>
            </div>

            <h2 id="auth-title">
              {authMode === 'login'
                ? 'Bon retour parmi nous'
                : authMode === 'signup'
                  ? 'Créer votre compte'
                  : 'Réinitialiser le mot de passe'}
            </h2>

            <p>
              {authMode === 'login'
                ? 'Connectez-vous pour synchroniser vos favoris et votre espace.'
                : authMode === 'signup'
                  ? 'Créez un compte gratuit pour retrouver vos outils sur tous vos appareils.'
                  : 'Recevez un lien sécurisé pour choisir un nouveau mot de passe.'}
            </p>

            <form onSubmit={submitAuth}>
              {authMode === 'signup' && (
                <label>
                  Nom complet
                  <input
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Votre nom"
                    autoComplete="name"
                  />
                </label>
              )}

              <label>
                Adresse e-mail
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  autoComplete="email"
                />
              </label>

              {authMode !== 'reset' && (
                <label>
                  Mot de passe
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="6 caractères minimum"
                    autoComplete={
                      authMode === 'login'
                        ? 'current-password'
                        : 'new-password'
                    }
                  />
                </label>
              )}

              {authError && (
                <div className="auth-error">
                  {authError}
                </div>
              )}

              <button
                className="auth-submit"
                disabled={authBusy}
              >
                {authBusy
                  ? 'Veuillez patienter…'
                  : authMode === 'login'
                    ? 'Se connecter'
                    : authMode === 'signup'
                      ? 'Créer mon compte'
                      : 'Envoyer le lien'}
              </button>
            </form>

            <div className="auth-links">
              {authMode === 'login' ? (
                <>
                  <button onClick={() => setAuthMode('signup')}>
                    Créer un compte
                  </button>

                  <button onClick={() => setAuthMode('reset')}>
                    Mot de passe oublié ?
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setAuthMode('login')
                    setAuthError('')
                  }}
                >
                  J’ai déjà un compte · Se connecter
                </button>
              )}
            </div>

            <small className="auth-footnote">
              {supabaseConfigured
                ? 'Authentification sécurisée par Supabase.'
                : 'Configuration Supabase requise pour utiliser cette fonction.'}
            </small>
          </section>
        </div>
      )}

      {notice && (
        <div className="toast">
          <Check size={17}/>
          {notice}
        </div>
      )}
    </div>
  )
}

function ArrowUpRightIcon() {
  return (
    <ArrowDownRight
      size={16}
      className="launch-arrow"
    />
  )
}