export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pages: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services for Healthcare & Aesthetic Practices",
    description: "EliteUSMD provides expert medical director services ensuring compliance, safety, and high-quality care for healthcare and aesthetic practices.",
    keywords: "medical director, healthcare compliance, aesthetic practice, medical oversight, physician collaboration",
    ogImage: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
  },
  {
    url: "resources/medical-direction-challenges.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Common Challenges in Medical Direction | Solutions & Strategies",
    description: "Explore common challenges faced by medical directors and discover effective solutions for regulatory compliance, staff management, and operational efficiency.",
    keywords: "medical director challenges, healthcare compliance, staff management, operational efficiency, medical oversight",
  },
  {
    url: "resources/why-medical-directors-vital.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Why Medical Directors Are Vital: Guardians of Healthcare Excellence",
    description: "Discover the critical role of medical directors in ensuring patient safety, regulatory compliance, and driving quality improvement in healthcare organizations.",
    keywords: "medical director importance, healthcare leadership, patient safety, regulatory compliance, clinical excellence",
  },
  // ... other existing routes
]
