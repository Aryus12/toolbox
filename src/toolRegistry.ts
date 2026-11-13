/* ToolBox500 — Conçu et maintenu par AYI AYITE ARYUS OBATOBY. */
export type ToolDefinition = { id:string; name:string; description:string; category:string; categorySlug:string; mode:string; icon:string; color:string }
export const TOOL_REGISTRY: ToolDefinition[] = [
  {
    "id": "intelligence-artificielle-generateur-de-prompts",
    "name": "Générateur de prompts",
    "description": "Structure un prompt clair selon votre objectif.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "violet"
  },
  {
    "id": "intelligence-artificielle-resume-intelligent",
    "name": "Résumé intelligent",
    "description": "Produit un résumé extractif de votre texte.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "blue"
  },
  {
    "id": "intelligence-artificielle-reformulateur-de-texte",
    "name": "Reformulateur de texte",
    "description": "Réécrit un texte avec une consigne de ton.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "orange"
  },
  {
    "id": "intelligence-artificielle-correcteur-de-texte",
    "name": "Correcteur de texte",
    "description": "Repère les répétitions et améliore la lisibilité.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "green"
  },
  {
    "id": "intelligence-artificielle-generateur-de-titres",
    "name": "Générateur de titres",
    "description": "Propose des titres à partir de votre sujet.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "pink"
  },
  {
    "id": "intelligence-artificielle-planificateur-de-contenu",
    "name": "Planificateur de contenu",
    "description": "Construit un plan détaillé à partir d’un thème.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "cyan"
  },
  {
    "id": "intelligence-artificielle-assistant-de-brainstorming",
    "name": "Assistant de brainstorming",
    "description": "Développe des pistes et angles de réflexion.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "violet"
  },
  {
    "id": "intelligence-artificielle-generateur-de-questions",
    "name": "Générateur de questions",
    "description": "Crée des questions à partir d’un contenu.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "blue"
  },
  {
    "id": "intelligence-artificielle-extracteur-de-mots-cles",
    "name": "Extracteur de mots-clés",
    "description": "Identifie les termes les plus fréquents.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "orange"
  },
  {
    "id": "intelligence-artificielle-detecteur-de-langue",
    "name": "Détecteur de langue",
    "description": "Estime la langue dominante d’un texte.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "green"
  },
  {
    "id": "intelligence-artificielle-simplificateur-de-texte",
    "name": "Simplificateur de texte",
    "description": "Réduit les phrases complexes.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "pink"
  },
  {
    "id": "intelligence-artificielle-convertisseur-en-bullet-points",
    "name": "Convertisseur en bullet points",
    "description": "Transforme un paragraphe en liste.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "cyan"
  },
  {
    "id": "intelligence-artificielle-generateur-de-description",
    "name": "Générateur de description",
    "description": "Prépare une description structurée.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "violet"
  },
  {
    "id": "intelligence-artificielle-assistant-e-mail",
    "name": "Assistant e-mail",
    "description": "Compose un modèle d’e-mail professionnel.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "blue"
  },
  {
    "id": "intelligence-artificielle-createur-de-checklist",
    "name": "Créateur de checklist",
    "description": "Transforme un objectif en tâches vérifiables.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "ai",
    "icon": "brain",
    "color": "orange"
  },
  {
    "id": "images-redimensionneur-dimage",
    "name": "Redimensionneur d’image",
    "description": "Change les dimensions d’une image dans le navigateur.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "green"
  },
  {
    "id": "images-convertisseur-png",
    "name": "Convertisseur PNG",
    "description": "Convertit une image en PNG.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "pink"
  },
  {
    "id": "images-convertisseur-jpeg",
    "name": "Convertisseur JPEG",
    "description": "Convertit une image en JPEG.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "cyan"
  },
  {
    "id": "images-convertisseur-webp",
    "name": "Convertisseur WebP",
    "description": "Convertit une image en WebP.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "violet"
  },
  {
    "id": "images-compresseur-dimage",
    "name": "Compresseur d’image",
    "description": "Réduit le poids d’une image.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "blue"
  },
  {
    "id": "images-image-en-niveaux-de-gris",
    "name": "Image en niveaux de gris",
    "description": "Applique un rendu monochrome.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "orange"
  },
  {
    "id": "images-miroir-horizontal",
    "name": "Miroir horizontal",
    "description": "Retourne une image horizontalement.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "green"
  },
  {
    "id": "images-rotation-dimage",
    "name": "Rotation d’image",
    "description": "Fait pivoter une image.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "pink"
  },
  {
    "id": "images-generateur-de-miniature",
    "name": "Générateur de miniature",
    "description": "Crée une miniature à partir d’une image.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "cyan"
  },
  {
    "id": "images-extracteur-de-couleurs",
    "name": "Extracteur de couleurs",
    "description": "Extrait les couleurs dominantes.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "violet"
  },
  {
    "id": "images-convertisseur-en-favicon",
    "name": "Convertisseur en favicon",
    "description": "Génère une icône carrée téléchargeable.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "blue"
  },
  {
    "id": "images-ajout-de-filigrane",
    "name": "Ajout de filigrane",
    "description": "Ajoute un texte en surimpression.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "orange"
  },
  {
    "id": "images-recadrage-carre",
    "name": "Recadrage carré",
    "description": "Produit un cadrage carré centré.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "green"
  },
  {
    "id": "images-image-en-base64",
    "name": "Image en base64",
    "description": "Encode une image en Data URL.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "pink"
  },
  {
    "id": "images-visualiseur-exif",
    "name": "Visualiseur EXIF",
    "description": "Affiche les métadonnées disponibles du fichier.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "image",
    "icon": "image",
    "color": "cyan"
  },
  {
    "id": "pdf-creer-un-pdf-texte",
    "name": "Créer un PDF texte",
    "description": "Génère un PDF à partir de texte.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "violet"
  },
  {
    "id": "pdf-fusionner-des-pdf",
    "name": "Fusionner des PDF",
    "description": "Assemble plusieurs PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "blue"
  },
  {
    "id": "pdf-extraire-les-pages-pdf",
    "name": "Extraire les pages PDF",
    "description": "Extrait des pages sélectionnées.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "orange"
  },
  {
    "id": "pdf-images-vers-pdf",
    "name": "Images vers PDF",
    "description": "Place des images dans un PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "green"
  },
  {
    "id": "pdf-pdf-vers-images",
    "name": "PDF vers images",
    "description": "Rend les pages en images.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "pink"
  },
  {
    "id": "pdf-ajouter-un-filigrane-pdf",
    "name": "Ajouter un filigrane PDF",
    "description": "Ajoute un texte en filigrane.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "cyan"
  },
  {
    "id": "pdf-numeroter-les-pages",
    "name": "Numéroter les pages",
    "description": "Ajoute une pagination.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "violet"
  },
  {
    "id": "pdf-rotation-de-pages-pdf",
    "name": "Rotation de pages PDF",
    "description": "Fait pivoter les pages.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "blue"
  },
  {
    "id": "pdf-compresser-un-pdf",
    "name": "Compresser un PDF",
    "description": "Optimise les ressources du document.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "orange"
  },
  {
    "id": "pdf-proteger-un-pdf",
    "name": "Protéger un PDF",
    "description": "Ajoute un mot de passe au document.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "green"
  },
  {
    "id": "pdf-deverrouiller-un-pdf",
    "name": "Déverrouiller un PDF",
    "description": "Traite un PDF dont vous possédez le mot de passe.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "pink"
  },
  {
    "id": "pdf-diviser-un-pdf",
    "name": "Diviser un PDF",
    "description": "Sépare un document en fichiers.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "cyan"
  },
  {
    "id": "pdf-metadonnees-pdf",
    "name": "Métadonnées PDF",
    "description": "Consulte et modifie les métadonnées.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "violet"
  },
  {
    "id": "pdf-signer-un-pdf",
    "name": "Signer un PDF",
    "description": "Ajoute une signature dessinée.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "blue"
  },
  {
    "id": "pdf-organiser-les-pages",
    "name": "Organiser les pages",
    "description": "Réordonne les pages d’un document.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "pdf",
    "icon": "file-pdf",
    "color": "orange"
  },
  {
    "id": "video-lecteur-video",
    "name": "Lecteur vidéo",
    "description": "Lit une vidéo locale.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "green"
  },
  {
    "id": "video-extracteur-de-miniature-video",
    "name": "Extracteur de miniature vidéo",
    "description": "Capture une image d’une vidéo.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "pink"
  },
  {
    "id": "video-informations-video",
    "name": "Informations vidéo",
    "description": "Affiche durée et dimensions.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "cyan"
  },
  {
    "id": "video-capture-dimage-video",
    "name": "Capture d’image vidéo",
    "description": "Exporte une image à un instant donné.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "violet"
  },
  {
    "id": "video-convertisseur-video-en-gif",
    "name": "Convertisseur vidéo en GIF",
    "description": "Prépare une séquence animée (navigateur compatible).",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "blue"
  },
  {
    "id": "video-rognage-video",
    "name": "Rognage vidéo",
    "description": "Définit une plage de lecture.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "orange"
  },
  {
    "id": "video-verificateur-de-codec",
    "name": "Vérificateur de codec",
    "description": "Affiche les formats lisibles par le navigateur.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "green"
  },
  {
    "id": "video-lecteur-image-par-image",
    "name": "Lecteur image par image",
    "description": "Avance image par image.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "pink"
  },
  {
    "id": "video-extracteur-audio-video",
    "name": "Extracteur audio vidéo",
    "description": "Extrait la piste audio si le navigateur le permet.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "cyan"
  },
  {
    "id": "video-createur-de-storyboard",
    "name": "Créateur de storyboard",
    "description": "Organise des captures en storyboard.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "violet"
  },
  {
    "id": "video-calculateur-de-bitrate",
    "name": "Calculateur de bitrate",
    "description": "Estime le débit vidéo cible.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "blue"
  },
  {
    "id": "video-calculateur-de-ratio-video",
    "name": "Calculateur de ratio vidéo",
    "description": "Calcule les proportions d’image.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "orange"
  },
  {
    "id": "video-convertisseur-de-timecode",
    "name": "Convertisseur de timecode",
    "description": "Convertit secondes et timecode.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "green"
  },
  {
    "id": "video-generateur-de-sous-titres-srt",
    "name": "Générateur de sous-titres SRT",
    "description": "Crée un fichier SRT à partir de lignes.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "pink"
  },
  {
    "id": "video-apercu-video-vertical",
    "name": "Aperçu vidéo vertical",
    "description": "Prévisualise une vidéo au format portrait.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "video",
    "icon": "video",
    "color": "cyan"
  },
  {
    "id": "audio-lecteur-audio",
    "name": "Lecteur audio",
    "description": "Lit un fichier audio local.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "violet"
  },
  {
    "id": "audio-convertisseur-wav",
    "name": "Convertisseur WAV",
    "description": "Encode un audio décodé en WAV.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "blue"
  },
  {
    "id": "audio-normaliseur-audio",
    "name": "Normaliseur audio",
    "description": "Ajuste le niveau sonore.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "orange"
  },
  {
    "id": "audio-visualiseur-de-waveform",
    "name": "Visualiseur de waveform",
    "description": "Affiche la forme d’onde.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "green"
  },
  {
    "id": "audio-enregistreur-vocal",
    "name": "Enregistreur vocal",
    "description": "Enregistre depuis le microphone.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "pink"
  },
  {
    "id": "audio-decoupeur-audio",
    "name": "Découpeur audio",
    "description": "Extrait une plage audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "cyan"
  },
  {
    "id": "audio-fusionneur-audio",
    "name": "Fusionneur audio",
    "description": "Assemble des fichiers WAV.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "violet"
  },
  {
    "id": "audio-analyseur-de-frequence",
    "name": "Analyseur de fréquence",
    "description": "Affiche le spectre audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "blue"
  },
  {
    "id": "audio-detecteur-de-silence",
    "name": "Détecteur de silence",
    "description": "Repère les passages silencieux.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "orange"
  },
  {
    "id": "audio-generateur-de-tonalite",
    "name": "Générateur de tonalité",
    "description": "Crée une tonalité audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "green"
  },
  {
    "id": "audio-metronome",
    "name": "Métronome",
    "description": "Génère un tempo réglable.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "pink"
  },
  {
    "id": "audio-calculateur-de-duree-audio",
    "name": "Calculateur de durée audio",
    "description": "Convertit et calcule des durées.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "cyan"
  },
  {
    "id": "audio-audio-en-base64",
    "name": "Audio en base64",
    "description": "Encode un fichier audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "violet"
  },
  {
    "id": "audio-test-microphone",
    "name": "Test microphone",
    "description": "Vérifie l’entrée audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "blue"
  },
  {
    "id": "audio-convertisseur-mono-stereo",
    "name": "Convertisseur mono/stéréo",
    "description": "Change le nombre de canaux WAV.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "audio",
    "icon": "audio-lines",
    "color": "orange"
  },
  {
    "id": "developpement-web-editeur-html-en-direct",
    "name": "Éditeur HTML en direct",
    "description": "Édite du HTML et visualise le rendu.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "green"
  },
  {
    "id": "developpement-web-formateur-html",
    "name": "Formateur HTML",
    "description": "Indente un document HTML.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "pink"
  },
  {
    "id": "developpement-web-formateur-css",
    "name": "Formateur CSS",
    "description": "Réorganise les règles CSS.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "cyan"
  },
  {
    "id": "developpement-web-minificateur-css",
    "name": "Minificateur CSS",
    "description": "Supprime les espaces inutiles.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "violet"
  },
  {
    "id": "developpement-web-formateur-javascript",
    "name": "Formateur JavaScript",
    "description": "Formate du code JavaScript simple.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "blue"
  },
  {
    "id": "developpement-web-bac-a-sable-css",
    "name": "Bac à sable CSS",
    "description": "Teste des propriétés CSS.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "orange"
  },
  {
    "id": "developpement-web-generateur-de-degrades",
    "name": "Générateur de dégradés",
    "description": "Crée un dégradé CSS.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "green"
  },
  {
    "id": "developpement-web-generateur-de-box-shadow",
    "name": "Générateur de box-shadow",
    "description": "Configure une ombre CSS.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "pink"
  },
  {
    "id": "developpement-web-generateur-de-border-radius",
    "name": "Générateur de border-radius",
    "description": "Crée une forme arrondie.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "cyan"
  },
  {
    "id": "developpement-web-testeur-responsive",
    "name": "Testeur responsive",
    "description": "Prévisualise une page selon des tailles.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "violet"
  },
  {
    "id": "developpement-web-encodeur-html",
    "name": "Encodeur HTML",
    "description": "Encode les caractères spéciaux.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "blue"
  },
  {
    "id": "developpement-web-decodeur-html",
    "name": "Décodeur HTML",
    "description": "Décode les entités HTML.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "orange"
  },
  {
    "id": "developpement-web-generateur-de-meta-tags",
    "name": "Générateur de meta tags",
    "description": "Crée les balises SEO de base.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "green"
  },
  {
    "id": "developpement-web-verificateur-de-contraste",
    "name": "Vérificateur de contraste",
    "description": "Mesure le contraste de deux couleurs.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "pink"
  },
  {
    "id": "developpement-web-inspecteur-de-user-agent",
    "name": "Inspecteur de User-Agent",
    "description": "Affiche les informations navigateur.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "code",
    "color": "cyan"
  },
  {
    "id": "programmation-formateur-json",
    "name": "Formateur JSON",
    "description": "Valide et indente du JSON.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "violet"
  },
  {
    "id": "programmation-validateur-json",
    "name": "Validateur JSON",
    "description": "Détecte les erreurs JSON.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "blue"
  },
  {
    "id": "programmation-convertisseur-json-csv",
    "name": "Convertisseur JSON CSV",
    "description": "Convertit des tableaux JSON en CSV.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "orange"
  },
  {
    "id": "programmation-convertisseur-csv-json",
    "name": "Convertisseur CSV JSON",
    "description": "Convertit du CSV en JSON.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "green"
  },
  {
    "id": "programmation-encodeur-base64",
    "name": "Encodeur Base64",
    "description": "Encode du texte en Base64.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "pink"
  },
  {
    "id": "programmation-decodeur-base64",
    "name": "Décodeur Base64",
    "description": "Décode du Base64.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "cyan"
  },
  {
    "id": "programmation-encodeur-url",
    "name": "Encodeur URL",
    "description": "Encode une chaîne pour une URL.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "violet"
  },
  {
    "id": "programmation-decodeur-url",
    "name": "Décodeur URL",
    "description": "Décode une chaîne URL.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "blue"
  },
  {
    "id": "programmation-generateur-uuid",
    "name": "Générateur UUID",
    "description": "Crée des identifiants UUID.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "orange"
  },
  {
    "id": "programmation-generateur-de-hash-sha",
    "name": "Générateur de hash SHA",
    "description": "Calcule un hash cryptographique.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "green"
  },
  {
    "id": "programmation-testeur-regex",
    "name": "Testeur regex",
    "description": "Teste une expression régulière.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "pink"
  },
  {
    "id": "programmation-comparateur-de-texte",
    "name": "Comparateur de texte",
    "description": "Compare deux blocs de texte.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "cyan"
  },
  {
    "id": "programmation-convertisseur-markdown-html",
    "name": "Convertisseur Markdown HTML",
    "description": "Convertit Markdown basique en HTML.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "violet"
  },
  {
    "id": "programmation-echappeur-de-chaines",
    "name": "Échappeur de chaînes",
    "description": "Échappe des chaînes pour le code.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "blue"
  },
  {
    "id": "programmation-convertisseur-timestamp",
    "name": "Convertisseur timestamp",
    "description": "Convertit les dates Unix.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "code",
    "icon": "terminal",
    "color": "orange"
  },
  {
    "id": "productivite-minuteur-pomodoro",
    "name": "Minuteur Pomodoro",
    "description": "Organise des sessions de concentration.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "green"
  },
  {
    "id": "productivite-chronometre",
    "name": "Chronomètre",
    "description": "Mesure le temps écoulé.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "pink"
  },
  {
    "id": "productivite-liste-de-taches",
    "name": "Liste de tâches",
    "description": "Gère une liste de tâches locale.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "cyan"
  },
  {
    "id": "productivite-generateur-de-checklist",
    "name": "Générateur de checklist",
    "description": "Crée une checklist réutilisable.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "violet"
  },
  {
    "id": "productivite-planificateur-journalier",
    "name": "Planificateur journalier",
    "description": "Structure une journée.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "blue"
  },
  {
    "id": "productivite-calculateur-de-temps",
    "name": "Calculateur de temps",
    "description": "Additionne des durées.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "orange"
  },
  {
    "id": "productivite-suivi-dhabitudes",
    "name": "Suivi d’habitudes",
    "description": "Coche des habitudes quotidiennes.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "green"
  },
  {
    "id": "productivite-prise-de-notes",
    "name": "Prise de notes",
    "description": "Écrit et sauvegarde des notes locales.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "pink"
  },
  {
    "id": "productivite-compteur-de-mots",
    "name": "Compteur de mots",
    "description": "Compte mots et caractères.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "cyan"
  },
  {
    "id": "productivite-compteur-de-caracteres",
    "name": "Compteur de caractères",
    "description": "Compte les caractères avec espaces.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "violet"
  },
  {
    "id": "productivite-generateur-de-planning",
    "name": "Générateur de planning",
    "description": "Crée un planning hebdomadaire.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "blue"
  },
  {
    "id": "productivite-convertisseur-fuseaux-horaires",
    "name": "Convertisseur fuseaux horaires",
    "description": "Compare des heures entre fuseaux.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "orange"
  },
  {
    "id": "productivite-rappel-local",
    "name": "Rappel local",
    "description": "Programme un rappel dans cet onglet.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "green"
  },
  {
    "id": "productivite-randomiseur-de-decisions",
    "name": "Randomiseur de décisions",
    "description": "Tire une option au hasard.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "pink"
  },
  {
    "id": "productivite-generateur-de-qr-code",
    "name": "Générateur de QR code",
    "description": "Crée un QR code à partir d’un texte.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "productivity",
    "icon": "zap",
    "color": "cyan"
  },
  {
    "id": "bureautique-generateur-de-facture",
    "name": "Générateur de facture",
    "description": "Crée une facture imprimable.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "violet"
  },
  {
    "id": "bureautique-generateur-de-devis",
    "name": "Générateur de devis",
    "description": "Prépare un devis imprimable.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "blue"
  },
  {
    "id": "bureautique-calculateur-de-tva",
    "name": "Calculateur de TVA",
    "description": "Calcule HT, TVA et TTC.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "orange"
  },
  {
    "id": "bureautique-tableau-csv",
    "name": "Tableau CSV",
    "description": "Crée et télécharge un tableau CSV.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "green"
  },
  {
    "id": "bureautique-convertisseur-xlsx-csv",
    "name": "Convertisseur XLSX CSV",
    "description": "Convertit un CSV pour tableur.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "pink"
  },
  {
    "id": "bureautique-generateur-de-lettre",
    "name": "Générateur de lettre",
    "description": "Prépare une lettre professionnelle.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "cyan"
  },
  {
    "id": "bureautique-generateur-de-compte-rendu",
    "name": "Générateur de compte rendu",
    "description": "Structure un compte rendu.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "violet"
  },
  {
    "id": "bureautique-createur-de-proces-verbal",
    "name": "Créateur de procès-verbal",
    "description": "Prépare un modèle de PV.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "blue"
  },
  {
    "id": "bureautique-generateur-de-recu",
    "name": "Générateur de reçu",
    "description": "Crée un reçu imprimable.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "orange"
  },
  {
    "id": "bureautique-calculateur-de-remise",
    "name": "Calculateur de remise",
    "description": "Calcule une réduction.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "green"
  },
  {
    "id": "bureautique-comparateur-de-listes",
    "name": "Comparateur de listes",
    "description": "Compare deux listes.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "pink"
  },
  {
    "id": "bureautique-fusionneur-de-texte",
    "name": "Fusionneur de texte",
    "description": "Assemble plusieurs textes.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "cyan"
  },
  {
    "id": "bureautique-nettoyeur-de-donnees",
    "name": "Nettoyeur de données",
    "description": "Nettoie espaces et doublons.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "violet"
  },
  {
    "id": "bureautique-generateur-de-tableau",
    "name": "Générateur de tableau",
    "description": "Crée un tableau HTML/CSV.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "blue"
  },
  {
    "id": "bureautique-convertisseur-nombres-lettres",
    "name": "Convertisseur nombres lettres",
    "description": "Écrit un nombre en toutes lettres (FR).",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "office",
    "icon": "briefcase-business",
    "color": "orange"
  },
  {
    "id": "reseaux-sociaux-generateur-de-legendes",
    "name": "Générateur de légendes",
    "description": "Prépare des légendes sociales.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "green"
  },
  {
    "id": "reseaux-sociaux-compteur-de-hashtags",
    "name": "Compteur de hashtags",
    "description": "Compte et trie les hashtags.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "pink"
  },
  {
    "id": "reseaux-sociaux-generateur-de-hashtags",
    "name": "Générateur de hashtags",
    "description": "Propose des hashtags depuis un sujet.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "cyan"
  },
  {
    "id": "reseaux-sociaux-planificateur-de-publications",
    "name": "Planificateur de publications",
    "description": "Organise un calendrier éditorial.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "violet"
  },
  {
    "id": "reseaux-sociaux-bio-instagram",
    "name": "Bio Instagram",
    "description": "Compose une bio courte.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "blue"
  },
  {
    "id": "reseaux-sociaux-bio-linkedin",
    "name": "Bio LinkedIn",
    "description": "Compose une présentation professionnelle.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "orange"
  },
  {
    "id": "reseaux-sociaux-bio-tiktok",
    "name": "Bio TikTok",
    "description": "Prépare une bio concise.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "green"
  },
  {
    "id": "reseaux-sociaux-compteur-de-caracteres-x",
    "name": "Compteur de caractères X",
    "description": "Vérifie la longueur d’un post.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "pink"
  },
  {
    "id": "reseaux-sociaux-apercu-de-publication",
    "name": "Aperçu de publication",
    "description": "Prévisualise un post texte.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "cyan"
  },
  {
    "id": "reseaux-sociaux-generateur-de-cta",
    "name": "Générateur de CTA",
    "description": "Propose des appels à l’action.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "violet"
  },
  {
    "id": "reseaux-sociaux-idees-de-publications",
    "name": "Idées de publications",
    "description": "Génère des angles de contenu.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "blue"
  },
  {
    "id": "reseaux-sociaux-convertisseur-emoji",
    "name": "Convertisseur emoji",
    "description": "Ajoute des emojis selon un thème.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "orange"
  },
  {
    "id": "reseaux-sociaux-analyseur-de-texte-social",
    "name": "Analyseur de texte social",
    "description": "Mesure longueur et lisibilité.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "green"
  },
  {
    "id": "reseaux-sociaux-generateur-de-sondage",
    "name": "Générateur de sondage",
    "description": "Prépare des questions de sondage.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "pink"
  },
  {
    "id": "reseaux-sociaux-calendrier-de-contenu",
    "name": "Calendrier de contenu",
    "description": "Crée un calendrier mensuel.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "social",
    "icon": "share-2",
    "color": "cyan"
  },
  {
    "id": "marketing-generateur-de-slogan",
    "name": "Générateur de slogan",
    "description": "Propose des slogans à partir d’une marque.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "violet"
  },
  {
    "id": "marketing-generateur-de-persona",
    "name": "Générateur de persona",
    "description": "Structure un persona marketing.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "blue"
  },
  {
    "id": "marketing-calculateur-de-roi",
    "name": "Calculateur de ROI",
    "description": "Calcule le retour sur investissement.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "orange"
  },
  {
    "id": "marketing-calculateur-de-taux-de-conversion",
    "name": "Calculateur de taux de conversion",
    "description": "Calcule un taux de conversion.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "green"
  },
  {
    "id": "marketing-calculateur-de-cpc",
    "name": "Calculateur de CPC",
    "description": "Calcule le coût par clic.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "pink"
  },
  {
    "id": "marketing-calculateur-de-cpm",
    "name": "Calculateur de CPM",
    "description": "Calcule le coût pour mille impressions.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "cyan"
  },
  {
    "id": "marketing-calculateur-de-marge",
    "name": "Calculateur de marge",
    "description": "Calcule marge et taux de marge.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "violet"
  },
  {
    "id": "marketing-generateur-de-brief",
    "name": "Générateur de brief",
    "description": "Structure un brief de campagne.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "blue"
  },
  {
    "id": "marketing-analyseur-aida",
    "name": "Analyseur AIDA",
    "description": "Structure un message selon AIDA.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "orange"
  },
  {
    "id": "marketing-generateur-de-mail-marketing",
    "name": "Générateur d’e-mail marketing",
    "description": "Prépare un e-mail promotionnel.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "green"
  },
  {
    "id": "marketing-generateur-doffre",
    "name": "Générateur d’offre",
    "description": "Structure une proposition commerciale.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "pink"
  },
  {
    "id": "marketing-calculateur-de-panier-moyen",
    "name": "Calculateur de panier moyen",
    "description": "Calcule le panier moyen.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "cyan"
  },
  {
    "id": "marketing-calculateur-de-cac",
    "name": "Calculateur de CAC",
    "description": "Calcule le coût d’acquisition.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "violet"
  },
  {
    "id": "marketing-generateur-de-proposition-de-valeur",
    "name": "Générateur de proposition de valeur",
    "description": "Formule une proposition de valeur.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "blue"
  },
  {
    "id": "marketing-testeur-de-titres",
    "name": "Testeur de titres",
    "description": "Compare des variantes de titres.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "marketing",
    "icon": "megaphone",
    "color": "orange"
  },
  {
    "id": "seo-generateur-de-meta-title",
    "name": "Générateur de meta title",
    "description": "Crée un titre SEO.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-generateur-de-meta-description",
    "name": "Générateur de meta description",
    "description": "Crée une description SEO.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "pink"
  },
  {
    "id": "seo-compteur-de-mots-cles",
    "name": "Compteur de mots-clés",
    "description": "Compte les occurrences.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-extracteur-de-mots-cles-seo",
    "name": "Extracteur de mots-clés SEO",
    "description": "Extrait les expressions fréquentes.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "seo-generateur-de-slug",
    "name": "Générateur de slug",
    "description": "Crée une URL lisible.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-generateur-robots-txt",
    "name": "Générateur robots.txt",
    "description": "Crée un fichier robots.txt.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-generateur-sitemap-xml",
    "name": "Générateur sitemap XML",
    "description": "Crée un sitemap XML.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-generateur-schema-json-ld",
    "name": "Générateur Schema JSON-LD",
    "description": "Crée un balisage structuré.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "pink"
  },
  {
    "id": "seo-apercu-serp",
    "name": "Aperçu SERP",
    "description": "Prévisualise un résultat Google.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-analyseur-de-densite",
    "name": "Analyseur de densité",
    "description": "Calcule la densité des mots.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "seo-compteur-de-longueur-title",
    "name": "Compteur de longueur title",
    "description": "Vérifie la longueur du titre.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-compteur-de-longueur-description",
    "name": "Compteur de longueur description",
    "description": "Vérifie la longueur meta description.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-generateur-de-liens-utm",
    "name": "Générateur de liens UTM",
    "description": "Construit des URL de campagne.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-verificateur-de-redirection",
    "name": "Vérificateur de redirection",
    "description": "Teste une URL accessible.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "pink"
  },
  {
    "id": "seo-generateur-de-faq-seo",
    "name": "Générateur de FAQ SEO",
    "description": "Structure une FAQ.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "securite-generateur-de-mot-de-passe",
    "name": "Générateur de mot de passe",
    "description": "Crée un mot de passe aléatoire.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "violet"
  },
  {
    "id": "securite-evaluateur-de-mot-de-passe",
    "name": "Évaluateur de mot de passe",
    "description": "Estime la robustesse locale.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "blue"
  },
  {
    "id": "securite-generateur-de-phrase-secrete",
    "name": "Générateur de phrase secrète",
    "description": "Crée une phrase secrète.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "orange"
  },
  {
    "id": "securite-generateur-de-token",
    "name": "Générateur de token",
    "description": "Crée un token aléatoire.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "green"
  },
  {
    "id": "securite-generateur-de-hash-sha-256",
    "name": "Générateur de hash SHA-256",
    "description": "Calcule un hash SHA-256.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "pink"
  },
  {
    "id": "securite-encodeur-base64-securise",
    "name": "Encodeur Base64 sécurisé",
    "description": "Encode des données.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "cyan"
  },
  {
    "id": "securite-generateur-de-cle-api",
    "name": "Générateur de clé API",
    "description": "Crée une clé aléatoire.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "violet"
  },
  {
    "id": "securite-verificateur-durl",
    "name": "Vérificateur d’URL",
    "description": "Analyse le schéma et le domaine.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "blue"
  },
  {
    "id": "securite-decodeur-jwt",
    "name": "Décodeur JWT",
    "description": "Décode un JWT sans le vérifier.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "orange"
  },
  {
    "id": "securite-generateur-csp",
    "name": "Générateur CSP",
    "description": "Prépare une politique CSP.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "green"
  },
  {
    "id": "securite-generateur-den-tetes-securite",
    "name": "Générateur d’en-têtes sécurité",
    "description": "Propose des en-têtes HTTP.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "pink"
  },
  {
    "id": "securite-generateur-de-code-pin",
    "name": "Générateur de code PIN",
    "description": "Crée un code PIN aléatoire.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "cyan"
  },
  {
    "id": "securite-verificateur-de-fuite-locale",
    "name": "Vérificateur de fuite locale",
    "description": "Repère des motifs sensibles dans un texte.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "violet"
  },
  {
    "id": "securite-chiffreur-aes-local",
    "name": "Chiffreur AES local",
    "description": "Chiffre du texte avec Web Crypto.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "blue"
  },
  {
    "id": "securite-dechiffreur-aes-local",
    "name": "Déchiffreur AES local",
    "description": "Déchiffre un texte AES avec sa clé.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "security",
    "icon": "shield-check",
    "color": "orange"
  },
  {
    "id": "finance-calculateur-de-budget",
    "name": "Calculateur de budget",
    "description": "Répartit revenus et dépenses.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calculateur-de-pret",
    "name": "Calculateur de prêt",
    "description": "Estime une mensualité.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "pink"
  },
  {
    "id": "finance-calculateur-dinterets",
    "name": "Calculateur d’intérêts",
    "description": "Calcule des intérêts simples.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-calculateur-dinterets-composes",
    "name": "Calculateur d’intérêts composés",
    "description": "Projette un capital.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-convertisseur-de-devises-manuel",
    "name": "Convertisseur de devises manuel",
    "description": "Convertit avec un taux saisi.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-benefice",
    "name": "Calculateur de bénéfice",
    "description": "Calcule bénéfice et marge.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-calculateur-de-tva",
    "name": "Calculateur de TVA",
    "description": "Calcule la TVA.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calculateur-depargne",
    "name": "Calculateur d’épargne",
    "description": "Projette une épargne régulière.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "pink"
  },
  {
    "id": "finance-calculateur-de-salaire-net-estime",
    "name": "Calculateur de salaire net estimé",
    "description": "Applique un taux de retenue saisi.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-calculateur-de-partage",
    "name": "Calculateur de partage",
    "description": "Répartit une somme entre personnes.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-calculateur-de-remise",
    "name": "Calculateur de remise",
    "description": "Calcule prix après remise.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-seuil-de-rentabilite",
    "name": "Calculateur de seuil de rentabilité",
    "description": "Estime le point mort.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-calculateur-de-tresorerie",
    "name": "Calculateur de trésorerie",
    "description": "Calcule le solde prévisionnel.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calculateur-de-mensualite",
    "name": "Calculateur de mensualité",
    "description": "Estime une mensualité.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "pink"
  },
  {
    "id": "finance-convertisseur-fcfa",
    "name": "Convertisseur FCFA",
    "description": "Convertit FCFA et autres devises avec taux manuel.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "mathematiques-calculatrice-scientifique",
    "name": "Calculatrice scientifique",
    "description": "Effectue des calculs mathématiques.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "violet"
  },
  {
    "id": "mathematiques-resolveur-dequation",
    "name": "Résolveur d’équation",
    "description": "Résout une équation linéaire.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "blue"
  },
  {
    "id": "mathematiques-calculateur-de-pourcentage",
    "name": "Calculateur de pourcentage",
    "description": "Calcule des pourcentages.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "orange"
  },
  {
    "id": "mathematiques-calculateur-de-moyenne",
    "name": "Calculateur de moyenne",
    "description": "Calcule moyenne et médiane.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "green"
  },
  {
    "id": "mathematiques-calculateur-de-fractions",
    "name": "Calculateur de fractions",
    "description": "Simplifie des fractions.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "pink"
  },
  {
    "id": "mathematiques-convertisseur-dunites",
    "name": "Convertisseur d’unités",
    "description": "Convertit des unités courantes.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "cyan"
  },
  {
    "id": "mathematiques-calculateur-de-surface",
    "name": "Calculateur de surface",
    "description": "Calcule des aires.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "violet"
  },
  {
    "id": "mathematiques-calculateur-de-volume",
    "name": "Calculateur de volume",
    "description": "Calcule des volumes.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "blue"
  },
  {
    "id": "mathematiques-generateur-de-nombres-aleatoires",
    "name": "Générateur de nombres aléatoires",
    "description": "Tire des nombres.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "orange"
  },
  {
    "id": "mathematiques-calculateur-de-probabilite",
    "name": "Calculateur de probabilité",
    "description": "Calcule des probabilités simples.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "green"
  },
  {
    "id": "mathematiques-calculateur-de-regle-de-trois",
    "name": "Calculateur de règle de trois",
    "description": "Résout une proportion.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "pink"
  },
  {
    "id": "mathematiques-convertisseur-binaire-decimal",
    "name": "Convertisseur binaire décimal",
    "description": "Convertit les bases numériques.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "cyan"
  },
  {
    "id": "mathematiques-calculateur-de-pgcd-ppcm",
    "name": "Calculateur de PGCD PPCM",
    "description": "Calcule PGCD et PPCM.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "violet"
  },
  {
    "id": "mathematiques-calculateur-de-moyenne-ponderee",
    "name": "Calculateur de moyenne pondérée",
    "description": "Calcule une moyenne pondérée.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "blue"
  },
  {
    "id": "mathematiques-convertisseur-degres-radians",
    "name": "Convertisseur degrés radians",
    "description": "Convertit les angles.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "math",
    "icon": "calculator",
    "color": "orange"
  },
  {
    "id": "design-generateur-de-palette",
    "name": "Générateur de palette",
    "description": "Crée une palette de couleurs.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "green"
  },
  {
    "id": "design-selecteur-de-couleurs",
    "name": "Sélecteur de couleurs",
    "description": "Choisit une couleur HEX/RGB.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "pink"
  },
  {
    "id": "design-convertisseur-hex-rgb",
    "name": "Convertisseur HEX RGB",
    "description": "Convertit les formats couleur.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "cyan"
  },
  {
    "id": "design-verificateur-de-contraste",
    "name": "Vérificateur de contraste",
    "description": "Évalue le contraste WCAG.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "violet"
  },
  {
    "id": "design-generateur-de-degrade",
    "name": "Générateur de dégradé",
    "description": "Crée un dégradé CSS.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "blue"
  },
  {
    "id": "design-generateur-de-typographie",
    "name": "Générateur de typographie",
    "description": "Associe des tailles de texte.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "orange"
  },
  {
    "id": "design-generateur-de-grille",
    "name": "Générateur de grille",
    "description": "Crée une grille CSS.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "green"
  },
  {
    "id": "design-generateur-de-bouton-css",
    "name": "Générateur de bouton CSS",
    "description": "Génère un style de bouton.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "pink"
  },
  {
    "id": "design-generateur-de-carte-css",
    "name": "Générateur de carte CSS",
    "description": "Génère une carte UI.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "cyan"
  },
  {
    "id": "design-generateur-de-logo-typographique",
    "name": "Générateur de logo typographique",
    "description": "Crée un logo texte SVG.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "violet"
  },
  {
    "id": "design-convertisseur-svg-png",
    "name": "Convertisseur SVG PNG",
    "description": "Convertit un SVG en PNG.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "blue"
  },
  {
    "id": "design-optimiseur-svg",
    "name": "Optimiseur SVG",
    "description": "Nettoie les espaces SVG.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "orange"
  },
  {
    "id": "design-generateur-de-formes",
    "name": "Générateur de formes",
    "description": "Crée des formes CSS.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "green"
  },
  {
    "id": "design-generateur-de-variables-css",
    "name": "Générateur de variables CSS",
    "description": "Crée des variables de thème.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "pink"
  },
  {
    "id": "design-simulateur-despacement",
    "name": "Simulateur d’espacement",
    "description": "Visualise une échelle d’espacement.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "design",
    "icon": "palette",
    "color": "cyan"
  },
  {
    "id": "ecriture-compteur-de-mots",
    "name": "Compteur de mots",
    "description": "Compte mots, phrases et caractères.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "violet"
  },
  {
    "id": "ecriture-correcteur-typographique",
    "name": "Correcteur typographique",
    "description": "Corrige espaces et ponctuation courante.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "blue"
  },
  {
    "id": "ecriture-generateur-de-lettre",
    "name": "Générateur de lettre",
    "description": "Prépare une lettre formelle.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "orange"
  },
  {
    "id": "ecriture-generateur-de-cv-texte",
    "name": "Générateur de CV texte",
    "description": "Structure un CV.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "green"
  },
  {
    "id": "ecriture-generateur-de-lettre-de-motivation",
    "name": "Générateur de lettre de motivation",
    "description": "Prépare une lettre de motivation.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "pink"
  },
  {
    "id": "ecriture-generateur-de-resume",
    "name": "Générateur de résumé",
    "description": "Résume un texte par extraction.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "cyan"
  },
  {
    "id": "ecriture-generateur-de-plan",
    "name": "Générateur de plan",
    "description": "Structure un plan de rédaction.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "violet"
  },
  {
    "id": "ecriture-convertisseur-majuscules-minuscules",
    "name": "Convertisseur majuscules minuscules",
    "description": "Change la casse.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "blue"
  },
  {
    "id": "ecriture-nettoyeur-de-texte",
    "name": "Nettoyeur de texte",
    "description": "Supprime les espaces superflus.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "orange"
  },
  {
    "id": "ecriture-detecteur-de-repetitions",
    "name": "Détecteur de répétitions",
    "description": "Repère les répétitions.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "green"
  },
  {
    "id": "ecriture-generateur-de-citation",
    "name": "Générateur de citation",
    "description": "Formate une référence simple.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "pink"
  },
  {
    "id": "ecriture-generateur-de-bibliographie",
    "name": "Générateur de bibliographie",
    "description": "Formate des références.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "cyan"
  },
  {
    "id": "ecriture-generateur-de-dialogue",
    "name": "Générateur de dialogue",
    "description": "Prépare un dialogue à partir de rôles.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "violet"
  },
  {
    "id": "ecriture-generateur-de-discours",
    "name": "Générateur de discours",
    "description": "Structure un discours.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "blue"
  },
  {
    "id": "ecriture-analyseur-de-lisibilite",
    "name": "Analyseur de lisibilité",
    "description": "Estime la longueur des phrases.",
    "category": "Écriture",
    "categorySlug": "ecriture",
    "mode": "writing",
    "icon": "pen-line",
    "color": "orange"
  },
  {
    "id": "internet-generateur-de-qr-code",
    "name": "Générateur de QR code",
    "description": "Crée un QR code local.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "green"
  },
  {
    "id": "internet-encodeur-url",
    "name": "Encodeur URL",
    "description": "Encode une URL.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "pink"
  },
  {
    "id": "internet-decodeur-url",
    "name": "Décodeur URL",
    "description": "Décode une URL.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "cyan"
  },
  {
    "id": "internet-analyseur-durl",
    "name": "Analyseur d’URL",
    "description": "Décompose une adresse web.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "violet"
  },
  {
    "id": "internet-generateur-de-lien-court-local",
    "name": "Générateur de lien court local",
    "description": "Crée un alias local partageable dans le navigateur.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "blue"
  },
  {
    "id": "internet-verificateur-de-connexion",
    "name": "Vérificateur de connexion",
    "description": "Teste la connectivité navigateur.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "orange"
  },
  {
    "id": "internet-test-de-vitesse-indicatif",
    "name": "Test de vitesse indicatif",
    "description": "Mesure un téléchargement de test si fourni.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "green"
  },
  {
    "id": "internet-convertisseur-domaine-punycode",
    "name": "Convertisseur domaine Punycode",
    "description": "Convertit les noms de domaine.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "pink"
  },
  {
    "id": "internet-generateur-de-signature-e-mail",
    "name": "Générateur de signature e-mail",
    "description": "Crée une signature HTML.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "cyan"
  },
  {
    "id": "internet-generateur-de-lien-whatsapp",
    "name": "Générateur de lien WhatsApp",
    "description": "Construit un lien WhatsApp.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "violet"
  },
  {
    "id": "internet-generateur-de-lien-mailto",
    "name": "Générateur de lien mailto",
    "description": "Construit un lien e-mail.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "blue"
  },
  {
    "id": "internet-generateur-de-lien-telephone",
    "name": "Générateur de lien téléphone",
    "description": "Construit un lien téléphonique.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "orange"
  },
  {
    "id": "internet-lecteur-de-code-qr",
    "name": "Lecteur de code QR",
    "description": "Lit un QR via caméra si supporté.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "green"
  },
  {
    "id": "internet-generateur-de-mot-de-passe-wi-fi",
    "name": "Générateur de mot de passe Wi-Fi",
    "description": "Crée une clé Wi-Fi aléatoire.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "pink"
  },
  {
    "id": "internet-convertisseur-ipv4-binaire",
    "name": "Convertisseur IPv4 binaire",
    "description": "Convertit une adresse IPv4.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "internet",
    "icon": "globe",
    "color": "cyan"
  },
  {
    "id": "fichiers-renommeur-de-fichiers",
    "name": "Renommeur de fichiers",
    "description": "Prépare des noms de fichiers en lot.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "violet"
  },
  {
    "id": "fichiers-convertisseur-de-texte",
    "name": "Convertisseur de texte",
    "description": "Convertit TXT, Markdown et HTML.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "blue"
  },
  {
    "id": "fichiers-lecteur-de-fichiers",
    "name": "Lecteur de fichiers",
    "description": "Lit les fichiers texte locaux.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "orange"
  },
  {
    "id": "fichiers-comparateur-de-fichiers-texte",
    "name": "Comparateur de fichiers texte",
    "description": "Compare deux fichiers texte.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "green"
  },
  {
    "id": "fichiers-compresseur-zip",
    "name": "Compresseur ZIP",
    "description": "Crée une archive ZIP.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "pink"
  },
  {
    "id": "fichiers-decompresseur-zip",
    "name": "Décompresseur ZIP",
    "description": "Extrait une archive ZIP.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "cyan"
  },
  {
    "id": "fichiers-generateur-de-checksum",
    "name": "Générateur de checksum",
    "description": "Calcule SHA-256 d’un fichier.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "violet"
  },
  {
    "id": "fichiers-convertisseur-csv",
    "name": "Convertisseur CSV",
    "description": "Convertit les délimiteurs CSV.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "blue"
  },
  {
    "id": "fichiers-convertisseur-json-yaml",
    "name": "Convertisseur JSON YAML",
    "description": "Convertit JSON en YAML simple.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "orange"
  },
  {
    "id": "fichiers-generateur-de-data-url",
    "name": "Générateur de Data URL",
    "description": "Crée une Data URL.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "green"
  },
  {
    "id": "fichiers-decodeur-data-url",
    "name": "Décodeur Data URL",
    "description": "Extrait le contenu d’une Data URL.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "pink"
  },
  {
    "id": "fichiers-nettoyeur-de-nom-de-fichier",
    "name": "Nettoyeur de nom de fichier",
    "description": "Supprime les caractères interdits.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "cyan"
  },
  {
    "id": "fichiers-visualiseur-mime",
    "name": "Visualiseur MIME",
    "description": "Identifie le type MIME.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "violet"
  },
  {
    "id": "fichiers-diviseur-de-texte",
    "name": "Diviseur de texte",
    "description": "Découpe un fichier texte.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "blue"
  },
  {
    "id": "fichiers-fusionneur-de-fichiers-texte",
    "name": "Fusionneur de fichiers texte",
    "description": "Fusionne des fichiers texte.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "files",
    "icon": "files",
    "color": "orange"
  },
  {
    "id": "outils-insolites-tirage-au-sort",
    "name": "Tirage au sort",
    "description": "Choisit un élément au hasard.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "green"
  },
  {
    "id": "outils-insolites-pile-ou-face",
    "name": "Pile ou face",
    "description": "Lance une pièce virtuelle.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "pink"
  },
  {
    "id": "outils-insolites-de-de-jeu",
    "name": "Dé de jeu",
    "description": "Lance un ou plusieurs dés.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "cyan"
  },
  {
    "id": "outils-insolites-generateur-de-pseudo",
    "name": "Générateur de pseudo",
    "description": "Crée un pseudonyme.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "violet"
  },
  {
    "id": "outils-insolites-generateur-de-nom-de-projet",
    "name": "Générateur de nom de projet",
    "description": "Propose des noms de projet.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "blue"
  },
  {
    "id": "outils-insolites-generateur-de-couleur-aleatoire",
    "name": "Générateur de couleur aléatoire",
    "description": "Crée une couleur aléatoire.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "orange"
  },
  {
    "id": "outils-insolites-decideur-oui-ou-non",
    "name": "Décideur oui ou non",
    "description": "Répond au hasard à une question.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "green"
  },
  {
    "id": "outils-insolites-generateur-de-compliments",
    "name": "Générateur de compliments",
    "description": "Affiche un compliment aléatoire.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "pink"
  },
  {
    "id": "outils-insolites-compteur-de-jours",
    "name": "Compteur de jours",
    "description": "Calcule l’écart entre deux dates.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "cyan"
  },
  {
    "id": "outils-insolites-calculateur-dage",
    "name": "Calculateur d’âge",
    "description": "Calcule un âge à une date.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "violet"
  },
  {
    "id": "outils-insolites-generateur-de-bingo",
    "name": "Générateur de bingo",
    "description": "Crée une grille de bingo.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "blue"
  },
  {
    "id": "outils-insolites-generateur-de-citations",
    "name": "Générateur de citations",
    "description": "Affiche une citation courte.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "orange"
  },
  {
    "id": "outils-insolites-simulateur-de-lancer",
    "name": "Simulateur de lancer",
    "description": "Simule un lancer personnalisé.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "green"
  },
  {
    "id": "outils-insolites-generateur-de-mot-du-jour",
    "name": "Générateur de mot du jour",
    "description": "Tire un mot dans une liste.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "pink"
  },
  {
    "id": "outils-insolites-convertisseur-temps-humain",
    "name": "Convertisseur temps humain",
    "description": "Convertit des secondes en durée lisible.",
    "category": "Outils insolites",
    "categorySlug": "outils-insolites",
    "mode": "fun",
    "icon": "sparkles",
    "color": "cyan"
  },
  {
    "id": "finance-avance-calculateur-de-tva",
    "name": "Avancé Calculateur de TVA",
    "description": "Calcule la TVA collectée ou déductible.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-convertisseur-de-devises",
    "name": "Convertisseur de devises",
    "description": "Consultez et convertissez les principales devises.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-avance-calculateur-de-pret",
    "name": "Avancé Calculateur de prêt",
    "description": "Estime les mensualités et le coût d’un crédit.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-avance-calculateur-dinterets-composes",
    "name": "Avancé Calculateur d’intérêts composés",
    "description": "Projette la croissance d’un capital investi.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-suivi-de-portefeuille",
    "name": "Suivi de portefeuille",
    "description": "Suivez vos actifs et investissements.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-analyseur-dactions",
    "name": "Analyseur d’actions",
    "description": "Consultez les données fondamentales des sociétés cotées.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calendrier-economique",
    "name": "Calendrier économique",
    "description": "Repérez les annonces économiques importantes.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-marge",
    "name": "Calculateur de marge",
    "description": "Calcule la marge commerciale et le taux de marque.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-calculateur-de-rentabilite",
    "name": "Calculateur de rentabilité",
    "description": "Estime le rendement d’un investissement immobilier.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-createur-de-factures",
    "name": "Créateur de factures",
    "description": "Créez et envoyez des factures professionnelles.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-comptabilite-en-ligne",
    "name": "Comptabilité en ligne",
    "description": "Gérez recettes, dépenses et comptabilité.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-gestion-de-tresorerie",
    "name": "Gestion de trésorerie",
    "description": "Préparez des prévisions de trésorerie.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-salaire-net",
    "name": "Calculateur de salaire net",
    "description": "Estime le salaire net à partir du brut.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-calculateur-de-paie",
    "name": "Calculateur de paie",
    "description": "Estimez les coûts salariaux et charges.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-budget-personnel",
    "name": "Budget personnel",
    "description": "Organisez vos budgets et dépenses.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-suivi-des-depenses",
    "name": "Suivi des dépenses",
    "description": "Classez et visualisez vos dépenses.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-comparateur-de-frais",
    "name": "Comparateur de frais",
    "description": "Comparez les frais de services financiers.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-roi-financier",
    "name": "Calculateur de ROI financier",
    "description": "Mesure le retour sur investissement.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-convertisseur-crypto",
    "name": "Convertisseur crypto",
    "description": "Consultez les conversions entre crypto-actifs.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-suivi-des-cryptomonnaies",
    "name": "Suivi des cryptomonnaies",
    "description": "Suivez les cours et capitalisations crypto.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-explorateur-blockchain",
    "name": "Explorateur blockchain",
    "description": "Explorez les transactions et blocs publics.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calculateur-de-dca",
    "name": "Calculateur de DCA",
    "description": "Simule des achats périodiques d’actifs.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-taux-dendettement",
    "name": "Calculateur de taux d’endettement",
    "description": "Estime votre ratio d’endettement.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-planificateur-depargne",
    "name": "Planificateur d’épargne",
    "description": "Projette un objectif d’épargne.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-calculateur-de-remboursement",
    "name": "Calculateur de remboursement",
    "description": "Compare différentes stratégies de remboursement.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  },
  {
    "id": "finance-analyseur-de-budget-entreprise",
    "name": "Analyseur de budget entreprise",
    "description": "Structure un budget prévisionnel.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-convertisseur-de-taux-annuel",
    "name": "Convertisseur de taux annuel",
    "description": "Convertit les taux nominaux et effectifs.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-tableau-de-bord-financier",
    "name": "Tableau de bord financier",
    "description": "Centralisez des indicateurs financiers.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "seo-recherche-de-mots-cles",
    "name": "Recherche de mots-clés",
    "description": "Découvrez des idées de mots-clés et leur potentiel.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-audit-seo-technique",
    "name": "Audit SEO technique",
    "description": "Analysez les problèmes techniques d’un site.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-verificateur-de-backlinks",
    "name": "Vérificateur de backlinks",
    "description": "Explorez les liens entrants d’un domaine.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-analyseur-serp",
    "name": "Analyseur SERP",
    "description": "Examinez les pages de résultats Google.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-generateur-de-sitemap-xml",
    "name": "Générateur de sitemap XML",
    "description": "Créez un sitemap pour les moteurs de recherche.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "seo-test-robots-txt",
    "name": "Test robots.txt",
    "description": "Vérifiez les règles d’exploration robots.txt.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-generateur-de-donnees-structurees",
    "name": "Générateur de données structurées",
    "description": "Créez du balisage Schema.org.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-test-de-resultats-enrichis",
    "name": "Test de résultats enrichis",
    "description": "Testez les données structurées d’une page.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-analyseur-de-vitesse-web",
    "name": "Analyseur de vitesse web",
    "description": "Mesurez les performances et Core Web Vitals.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-verificateur-dindexation",
    "name": "Vérificateur d’indexation",
    "description": "Contrôlez la présence d’une page dans Google.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "seo-analyseur-de-densite-de-mots-cles",
    "name": "Analyseur de densité de mots-clés",
    "description": "Étudiez la fréquence des termes dans un texte.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-generateur-de-balises-meta",
    "name": "Générateur de balises meta",
    "description": "Préparez titres et descriptions SEO.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-previsualiseur-open-graph",
    "name": "Prévisualiseur Open Graph",
    "description": "Prévisualisez les cartes de partage social.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-verificateur-de-liens-casses",
    "name": "Vérificateur de liens cassés",
    "description": "Repérez les liens qui ne fonctionnent plus.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-comparateur-de-domaines",
    "name": "Comparateur de domaines",
    "description": "Comparez visibilité et métriques SEO.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "seo-suivi-de-positionnement",
    "name": "Suivi de positionnement",
    "description": "Suivez les positions de mots-clés.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "orange"
  },
  {
    "id": "seo-analyseur-de-contenu-seo",
    "name": "Analyseur de contenu SEO",
    "description": "Évaluez la structure et la couverture sémantique.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "cyan"
  },
  {
    "id": "seo-generateur-de-redirections",
    "name": "Générateur de redirections",
    "description": "Préparez des règles de redirection HTTP.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "green"
  },
  {
    "id": "seo-verificateur-canonical",
    "name": "Vérificateur canonical",
    "description": "Contrôlez les URL canoniques d’une page.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "blue"
  },
  {
    "id": "seo-audit-seo-local",
    "name": "Audit SEO local",
    "description": "Analysez la visibilité locale d’une entreprise.",
    "category": "SEO",
    "categorySlug": "seo",
    "mode": "seo",
    "icon": "search",
    "color": "violet"
  },
  {
    "id": "intelligence-artificielle-assistant-de-recherche",
    "name": "Assistant de recherche",
    "description": "Explorez des sujets avec des réponses sourcées.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "intelligence-artificielle-generateur-de-presentations-ia",
    "name": "Générateur de présentations IA",
    "description": "Transformez une idée en présentation.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "intelligence-artificielle-assistant-de-reunion-ia",
    "name": "Assistant de réunion IA",
    "description": "Transcrivez et résumez vos réunions.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "intelligence-artificielle-generateur-de-voix-ia",
    "name": "Générateur de voix IA",
    "description": "Créez des voix synthétiques.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "intelligence-artificielle-generateur-de-musique-ia",
    "name": "Générateur de musique IA",
    "description": "Composez des pistes musicales assistées par IA.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "intelligence-artificielle-assistant-de-code-ia",
    "name": "Assistant de code IA",
    "description": "Obtenez de l’aide pour écrire du code.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "intelligence-artificielle-recherche-documentaire-ia",
    "name": "Recherche documentaire IA",
    "description": "Interrogez vos documents avec l’IA.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "intelligence-artificielle-generateur-de-diagrammes-ia",
    "name": "Générateur de diagrammes IA",
    "description": "Créez des diagrammes depuis une consigne.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "intelligence-artificielle-createur-de-chatbot-ia",
    "name": "Créateur de chatbot IA",
    "description": "Construisez un assistant conversationnel.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "intelligence-artificielle-agent-ia-sans-code",
    "name": "Agent IA sans code",
    "description": "Créez des agents et automatisations IA.",
    "category": "Intelligence artificielle",
    "categorySlug": "intelligence-artificielle",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "developpement-web-editeur-de-code-en-ligne",
    "name": "Éditeur de code en ligne",
    "description": "Codez et partagez des projets web.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "developpement-web-bac-a-sable-react",
    "name": "Bac à sable React",
    "description": "Testez des interfaces React en ligne.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "developpement-web-hebergement-de-sites-statiques",
    "name": "Hébergement de sites statiques",
    "description": "Déployez des sites et applications web.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "developpement-web-plateforme-de-deploiement",
    "name": "Plateforme de déploiement",
    "description": "Déployez des applications front-end.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "developpement-web-testeur-de-responsive-design",
    "name": "Testeur de responsive design",
    "description": "Prévisualisez un site sur plusieurs formats.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "developpement-web-generateur-de-favicon",
    "name": "Générateur de favicon",
    "description": "Créez les icônes de votre site.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "developpement-web-verificateur-de-compatibilite-css",
    "name": "Vérificateur de compatibilité CSS",
    "description": "Testez la prise en charge des propriétés CSS.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "developpement-web-explorateur-dapi",
    "name": "Explorateur d’API",
    "description": "Testez des requêtes HTTP et API.",
    "category": "Développement web",
    "categorySlug": "developpement-web",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "programmation-reference-javascript",
    "name": "Référence JavaScript",
    "description": "Consultez la documentation JavaScript.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "programmation-bac-a-sable-sql",
    "name": "Bac à sable SQL",
    "description": "Exécutez des requêtes SQL de démonstration.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "programmation-visualiseur-dexpressions-regulieres",
    "name": "Visualiseur d’expressions régulières",
    "description": "Testez et expliquez des regex.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "programmation-avance-formateur-json",
    "name": "Avancé Formateur JSON",
    "description": "Formatez et validez du JSON.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "programmation-decodeur-jwt",
    "name": "Décodeur JWT",
    "description": "Inspectez la structure d’un jeton JWT.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "programmation-explorateur-git",
    "name": "Explorateur Git",
    "description": "Visualisez l’historique et les branches Git.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "programmation-documentation-api",
    "name": "Documentation API",
    "description": "Explorez des spécifications OpenAPI.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "programmation-avance-convertisseur-markdown-html",
    "name": "Avancé Convertisseur Markdown HTML",
    "description": "Convertissez du Markdown en HTML.",
    "category": "Programmation",
    "categorySlug": "programmation",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "productivite-tableau-de-gestion-de-projet",
    "name": "Tableau de gestion de projet",
    "description": "Organisez les tâches en équipe.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "productivite-espace-de-travail-collaboratif",
    "name": "Espace de travail collaboratif",
    "description": "Centralisez notes, projets et documents.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "productivite-automatisation-no-code",
    "name": "Automatisation no-code",
    "description": "Connectez vos applications et automatisez des tâches.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "productivite-automatisation-visuelle",
    "name": "Automatisation visuelle",
    "description": "Créez des scénarios d’automatisation.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "productivite-gestion-de-taches",
    "name": "Gestion de tâches",
    "description": "Planifiez vos tâches personnelles et professionnelles.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "productivite-cartographie-mentale",
    "name": "Cartographie mentale",
    "description": "Organisez vos idées sous forme de cartes.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "productivite-tableau-blanc-collaboratif",
    "name": "Tableau blanc collaboratif",
    "description": "Collaborez sur un tableau blanc en ligne.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "productivite-planification-de-rendez-vous",
    "name": "Planification de rendez-vous",
    "description": "Partagez un lien de réservation.",
    "category": "Productivité",
    "categorySlug": "productivite",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "bureautique-suite-bureautique-en-ligne",
    "name": "Suite bureautique en ligne",
    "description": "Créez documents, feuilles et présentations.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "bureautique-tableur-collaboratif",
    "name": "Tableur collaboratif",
    "description": "Travaillez sur des feuilles de calcul en ligne.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "bureautique-editeur-de-documents",
    "name": "Éditeur de documents",
    "description": "Rédigez et partagez des documents.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "bureautique-gestion-de-signatures",
    "name": "Gestion de signatures",
    "description": "Envoyez des documents à signer électroniquement.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "bureautique-convertisseur-de-documents",
    "name": "Convertisseur de documents",
    "description": "Convertissez de nombreux formats de fichiers.",
    "category": "Bureautique",
    "categorySlug": "bureautique",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "reseaux-sociaux-gestionnaire-de-reseaux-sociaux",
    "name": "Gestionnaire de réseaux sociaux",
    "description": "Planifiez et gérez plusieurs comptes sociaux.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "reseaux-sociaux-planificateur-instagram",
    "name": "Planificateur Instagram",
    "description": "Préparez vos publications Instagram.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "reseaux-sociaux-gestionnaire-de-communaute",
    "name": "Gestionnaire de communauté",
    "description": "Gérez les conversations et publications.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "reseaux-sociaux-analyseur-de-statistiques-sociales",
    "name": "Analyseur de statistiques sociales",
    "description": "Suivez les performances de vos contenus.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "reseaux-sociaux-createur-de-liens-bio",
    "name": "Créateur de liens bio",
    "description": "Regroupez vos liens dans une page.",
    "category": "Réseaux sociaux",
    "categorySlug": "reseaux-sociaux",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "marketing-createur-de-campagnes-e-mail",
    "name": "Créateur de campagnes e-mail",
    "description": "Créez et envoyez des campagnes marketing.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "marketing-automatisation-marketing",
    "name": "Automatisation marketing",
    "description": "Automatisez les parcours clients.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "marketing-constructeur-de-landing-page",
    "name": "Constructeur de landing page",
    "description": "Créez des pages de conversion.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "marketing-createur-de-formulaires",
    "name": "Créateur de formulaires",
    "description": "Collectez des réponses avec des formulaires.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "marketing-analyseur-de-campagnes",
    "name": "Analyseur de campagnes",
    "description": "Suivez les performances de campagnes.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "marketing-gestionnaire-de-tags",
    "name": "Gestionnaire de tags",
    "description": "Gérez les balises de suivi d’un site.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "marketing-test-a-b",
    "name": "Test A/B",
    "description": "Comparez des variantes de pages.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "marketing-plateforme-crm",
    "name": "Plateforme CRM",
    "description": "Centralisez prospects et relations clients.",
    "category": "Marketing",
    "categorySlug": "marketing",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "securite-verificateur-de-fuite-de-donnees",
    "name": "Vérificateur de fuite de données",
    "description": "Vérifiez si une adresse apparaît dans une fuite connue.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "securite-analyseur-de-fichiers-suspects",
    "name": "Analyseur de fichiers suspects",
    "description": "Analysez des fichiers et URL avec plusieurs moteurs.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "securite-gestionnaire-de-mots-de-passe",
    "name": "Gestionnaire de mots de passe",
    "description": "Stockez et gérez vos mots de passe.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "securite-verificateur-ssl",
    "name": "Vérificateur SSL",
    "description": "Contrôlez la configuration TLS d’un site.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "securite-analyseur-den-tetes-http",
    "name": "Analyseur d’en-têtes HTTP",
    "description": "Inspectez les en-têtes de sécurité HTTP.",
    "category": "Sécurité",
    "categorySlug": "securite",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "design-bibliotheque-de-ressources-design",
    "name": "Bibliothèque de ressources design",
    "description": "Trouvez des ressources graphiques.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "design-editeur-vectoriel-en-ligne",
    "name": "Éditeur vectoriel en ligne",
    "description": "Créez et modifiez des illustrations SVG.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "design-bibliotheque-dicones",
    "name": "Bibliothèque d’icônes",
    "description": "Explorez des icônes pour vos interfaces.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "design-palette-de-couleurs",
    "name": "Palette de couleurs",
    "description": "Composez des palettes harmonieuses.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "design-maquettes-dappareils",
    "name": "Maquettes d’appareils",
    "description": "Présentez vos interfaces dans des mockups.",
    "category": "Design",
    "categorySlug": "design",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "video-montage-video-en-ligne",
    "name": "Montage vidéo en ligne",
    "description": "Montez des vidéos depuis votre navigateur.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "video-sous-titres-automatiques",
    "name": "Sous-titres automatiques",
    "description": "Générez et éditez des sous-titres vidéo.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "video-compression-video",
    "name": "Compression vidéo",
    "description": "Réduisez le poids de fichiers vidéo.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "video-banque-de-videos-libres",
    "name": "Banque de vidéos libres",
    "description": "Trouvez des vidéos pour vos créations.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "video-enregistrement-ecran",
    "name": "Enregistrement écran",
    "description": "Enregistrez votre écran et partagez la vidéo.",
    "category": "Vidéo",
    "categorySlug": "video",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "audio-editeur-audio-en-ligne",
    "name": "Éditeur audio en ligne",
    "description": "Éditez des pistes audio dans le navigateur.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "audio-convertisseur-audio",
    "name": "Convertisseur audio",
    "description": "Convertissez des formats audio.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "audio-suppression-de-bruit-audio",
    "name": "Suppression de bruit audio",
    "description": "Nettoyez les bruits de fond d’un enregistrement.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "audio-transcription-audio",
    "name": "Transcription audio",
    "description": "Convertissez la parole en texte.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "audio-banque-de-sons",
    "name": "Banque de sons",
    "description": "Découvrez des effets sonores.",
    "category": "Audio",
    "categorySlug": "audio",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "fichiers-transfert-de-fichiers",
    "name": "Transfert de fichiers",
    "description": "Envoyez des fichiers volumineux.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "fichiers-stockage-cloud",
    "name": "Stockage cloud",
    "description": "Stockez et partagez vos fichiers.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "fichiers-stockage-google-drive",
    "name": "Stockage Google Drive",
    "description": "Conservez vos fichiers dans le cloud.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "fichiers-comparateur-de-fichiers",
    "name": "Comparateur de fichiers",
    "description": "Comparez des fichiers et dossiers.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "fichiers-archivage-en-ligne",
    "name": "Archivage en ligne",
    "description": "Compressez et décompressez des archives.",
    "category": "Fichiers",
    "categorySlug": "fichiers",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "internet-test-de-vitesse-internet",
    "name": "Test de vitesse Internet",
    "description": "Mesurez le débit de votre connexion.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "internet-recherche-dns",
    "name": "Recherche DNS",
    "description": "Consultez les enregistrements DNS d’un domaine.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "internet-verificateur-whois",
    "name": "Vérificateur WHOIS",
    "description": "Consultez les informations publiques d’un domaine.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "internet-test-de-disponibilite",
    "name": "Test de disponibilité",
    "description": "Vérifiez si un site est accessible.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "internet-archive-du-web",
    "name": "Archive du web",
    "description": "Consultez des versions archivées de sites.",
    "category": "Internet",
    "categorySlug": "internet",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "mathematiques-avance-calculatrice-scientifique",
    "name": "Avancé Calculatrice scientifique",
    "description": "Effectuez des calculs scientifiques.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "mathematiques-grapheur-de-fonctions",
    "name": "Grapheur de fonctions",
    "description": "Tracez des fonctions mathématiques.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "mathematiques-calculateur-de-statistiques",
    "name": "Calculateur de statistiques",
    "description": "Calculez des indicateurs statistiques.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "mathematiques-solveur-dequations",
    "name": "Solveur d’équations",
    "description": "Résolvez des équations étape par étape.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "mathematiques-calculateur-de-probabilites",
    "name": "Calculateur de probabilités",
    "description": "Explorez des distributions et probabilités.",
    "category": "Mathématiques",
    "categorySlug": "mathematiques",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "images-editeur-photo-avance",
    "name": "Éditeur photo avancé",
    "description": "Retouchez des images en ligne.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "images-suppression-de-fond",
    "name": "Suppression de fond",
    "description": "Supprimez automatiquement l’arrière-plan.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "images-vectorisation-dimage",
    "name": "Vectorisation d’image",
    "description": "Convertissez une image bitmap en SVG.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "images-banque-de-photos",
    "name": "Banque de photos",
    "description": "Trouvez des photographies libres.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "images-generateur-de-qr-code",
    "name": "Générateur de QR code",
    "description": "Créez un QR code à partir d’un lien.",
    "category": "Images",
    "categorySlug": "images",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "pdf-editeur-pdf",
    "name": "Éditeur PDF",
    "description": "Modifiez et annotez des documents PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "web",
    "icon": "spark",
    "color": "green"
  },
  {
    "id": "pdf-avance-signer-un-pdf",
    "name": "Avancé Signer un PDF",
    "description": "Ajoutez une signature électronique à un PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "web",
    "icon": "spark",
    "color": "blue"
  },
  {
    "id": "pdf-avance-compresser-un-pdf",
    "name": "Avancé Compresser un PDF",
    "description": "Réduisez la taille d’un document PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "web",
    "icon": "spark",
    "color": "violet"
  },
  {
    "id": "pdf-ocr-pdf",
    "name": "OCR PDF",
    "description": "Extrayez le texte de documents numérisés.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "web",
    "icon": "spark",
    "color": "orange"
  },
  {
    "id": "pdf-avance-proteger-un-pdf",
    "name": "Avancé Protéger un PDF",
    "description": "Ajoutez un mot de passe à un PDF.",
    "category": "PDF",
    "categorySlug": "pdf",
    "mode": "web",
    "icon": "spark",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-google-drive",
    "name": "Google Drive",
    "description": "Accédez à Google Drive et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-gmail",
    "name": "Gmail",
    "description": "Accédez à Gmail et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-google-calendar",
    "name": "Google Calendar",
    "description": "Accédez à Google Calendar et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-google-contacts",
    "name": "Google Contacts",
    "description": "Accédez à Google Contacts et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-google-docs",
    "name": "Google Docs",
    "description": "Accédez à Google Docs et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-google-sheets",
    "name": "Google Sheets",
    "description": "Accédez à Google Sheets et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-google-slides",
    "name": "Google Slides",
    "description": "Accédez à Google Slides et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-google-maps",
    "name": "Google Maps",
    "description": "Accédez à Google Maps et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-microsoft-outlook",
    "name": "Microsoft Outlook",
    "description": "Accédez à Microsoft Outlook et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-microsoft-onedrive",
    "name": "Microsoft OneDrive",
    "description": "Accédez à Microsoft OneDrive et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-microsoft-teams",
    "name": "Microsoft Teams",
    "description": "Accédez à Microsoft Teams et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-microsoft-sharepoint",
    "name": "Microsoft SharePoint",
    "description": "Accédez à Microsoft SharePoint et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-microsoft-excel",
    "name": "Microsoft Excel",
    "description": "Accédez à Microsoft Excel et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-microsoft-word",
    "name": "Microsoft Word",
    "description": "Accédez à Microsoft Word et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-microsoft-powerpoint",
    "name": "Microsoft PowerPoint",
    "description": "Accédez à Microsoft PowerPoint et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-github",
    "name": "GitHub",
    "description": "Accédez à GitHub et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-gitlab",
    "name": "GitLab",
    "description": "Accédez à GitLab et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-bitbucket",
    "name": "Bitbucket",
    "description": "Accédez à Bitbucket et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-notion",
    "name": "Notion",
    "description": "Accédez à Notion et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-slack",
    "name": "Slack",
    "description": "Accédez à Slack et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-trello",
    "name": "Trello",
    "description": "Accédez à Trello et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-asana",
    "name": "Asana",
    "description": "Accédez à Asana et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-monday-com",
    "name": "Monday.com",
    "description": "Accédez à Monday.com et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-clickup",
    "name": "ClickUp",
    "description": "Accédez à ClickUp et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-linear",
    "name": "Linear",
    "description": "Accédez à Linear et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-airtable",
    "name": "Airtable",
    "description": "Accédez à Airtable et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-jira",
    "name": "Jira",
    "description": "Accédez à Jira et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-confluence",
    "name": "Confluence",
    "description": "Accédez à Confluence et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-dropbox",
    "name": "Dropbox",
    "description": "Accédez à Dropbox et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-box",
    "name": "Box",
    "description": "Accédez à Box et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-canva",
    "name": "Canva",
    "description": "Accédez à Canva et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-figma",
    "name": "Figma",
    "description": "Accédez à Figma et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-miro",
    "name": "Miro",
    "description": "Accédez à Miro et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-adobe-express",
    "name": "Adobe Express",
    "description": "Accédez à Adobe Express et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-hubspot",
    "name": "HubSpot",
    "description": "Accédez à HubSpot et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-salesforce",
    "name": "Salesforce",
    "description": "Accédez à Salesforce et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-pipedrive",
    "name": "Pipedrive",
    "description": "Accédez à Pipedrive et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-stripe",
    "name": "Stripe",
    "description": "Accédez à Stripe et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-paypal",
    "name": "PayPal",
    "description": "Accédez à PayPal et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-quickbooks",
    "name": "QuickBooks",
    "description": "Accédez à QuickBooks et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-xero",
    "name": "Xero",
    "description": "Accédez à Xero et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-shopify",
    "name": "Shopify",
    "description": "Accédez à Shopify et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-woocommerce",
    "name": "WooCommerce",
    "description": "Accédez à WooCommerce et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-wordpress",
    "name": "WordPress",
    "description": "Accédez à WordPress et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-webflow",
    "name": "Webflow",
    "description": "Accédez à Webflow et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "applications-integrations-zapier",
    "name": "Zapier",
    "description": "Accédez à Zapier et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "green"
  },
  {
    "id": "applications-integrations-make",
    "name": "Make",
    "description": "Accédez à Make et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "blue"
  },
  {
    "id": "applications-integrations-calendly",
    "name": "Calendly",
    "description": "Accédez à Calendly et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "violet"
  },
  {
    "id": "applications-integrations-intercom",
    "name": "Intercom",
    "description": "Accédez à Intercom et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "orange"
  },
  {
    "id": "applications-integrations-zendesk",
    "name": "Zendesk",
    "description": "Accédez à Zendesk et explorez son service. La disponibilité d’une connexion à ChatGPT dépend de votre compte et de la région.",
    "category": "Applications ChatGPT & intégrations",
    "categorySlug": "applications-chatgpt-integrations",
    "mode": "integration",
    "icon": "plug",
    "color": "cyan"
  },
  {
    "id": "finance-calculateur-de-leasing",
    "name": "Calculateur de leasing",
    "description": "Estimez le coût total d’un financement locatif.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "green"
  },
  {
    "id": "finance-calculateur-de-valeur-future",
    "name": "Calculateur de valeur future",
    "description": "Projette la valeur future d’un capital.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "blue"
  },
  {
    "id": "finance-calculateur-de-rendement-dividendes",
    "name": "Calculateur de rendement dividendes",
    "description": "Estimez le rendement d’un portefeuille de dividendes.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "violet"
  },
  {
    "id": "finance-comparateur-de-banques",
    "name": "Comparateur de banques",
    "description": "Comparez les offres et services bancaires.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "orange"
  },
  {
    "id": "finance-simulateur-de-budget-previsionnel",
    "name": "Simulateur de budget prévisionnel",
    "description": "Construisez un budget prévisionnel simple.",
    "category": "Finance",
    "categorySlug": "finance",
    "mode": "finance",
    "icon": "wallet",
    "color": "cyan"
  }
]
