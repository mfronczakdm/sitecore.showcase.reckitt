import type { FeatureItem, CategoryItem, LinkItem } from "@/types"

// XM Cloud main categories
export const xmCloudData: FeatureItem[] = [
  {
    id: "reduce-dependency",
    title: "We can reduce your dependency on IT",
    description:
      "Sitecore provides a cloud-native, low-code platform that empowers marketers to manage content and digital experiences without relying on IT teams.",
    imageUrl:
      "https://na-sales-engineering.sitecoresandbox.cloud/api/public/content/4fce5609eb5848f1bfa877d44e217945?v=ac938072",
  },
  {
    id: "increase-execution",
    title: "We can increase your ability to Execute",
    description:
      "Sitecore streamlines content creation, asset management, and omnichannel delivery, enabling teams to launch campaigns faster and more efficiently.",
    imageUrl:
      "https://na-sales-engineering.sitecoresandbox.cloud/api/public/content/10fd7c79f5ee4a0d999ba1a794866650?v=abd9cd87",
  },
  {
    id: "drive-innovation",
    title: "We can Drive Innovation at Scale",
    description:
      "Sitecore's composable architecture and AI-driven personalization allow businesses to deliver cutting-edge digital experiences at scale.",
    imageUrl:
      "https://na-sales-engineering.sitecoresandbox.cloud/api/public/content/4bf16498d7a04213bc0954630db32fa4?v=920d0179",
  },
  {
    id: "agile-marketing",
    title: "Make your marketing teams agile",
    description:
      "Sitecore's intuitive UI, workflow automation, and real-time collaboration tools help marketers quickly adapt and respond to changing business needs. All backed by brand-aware AI with Stream",
    imageUrl:
      "https://na-sales-engineering.sitecoresandbox.cloud/api/public/content/10fd7c79f5ee4a0d999ba1a794866650?v=abd9cd87",
  },
  {
    id: "seo-revenue",
    title: "You would have the ultimate revenue generating SEO",
    description:
      "Sitecore optimizes structured content, metadata, and media assets for search engines, driving higher visibility and organic traffic.",
    imageUrl:
      "https://na-sales-engineering.sitecoresandbox.cloud/api/public/content/a3a97a2e9d4a4019a9e86694160b2d63?v=202b72ed",
  },
  {
    id: "future-proof",
    title: "Have a composable solution that is future-proof",
    description:
      "Sitecore's modular, API-first approach ensures seamless integrations and long-term adaptability to evolving digital trends.",
    imageUrl:
      "https://doc.sitecore.com/_next/image?url=https%3A%2F%2Fresources.doc.sitecore.com%2Fassets%2Fimage%2Fuuid-bee1fc8e-6072-dfaf-fb48-c4157e4fd101.png&w=3840&q=75",
  },
]

// Content Management System detailed categories
export const contentManagementData: CategoryItem[] = [
  {
    id: "integration-security",
    title: "Integration & Security",
    items: [
      {
        id: "unified-content",
        title: "Unified Content Access",
        description:
          "Access all your content from a single interface, streamlining workflows and improving efficiency.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unified.jpg-wH5JoP8rSSW9vsuVV8xsGWxNx3OWE9.webp",
      },
      {
        id: "flexible-architecture",
        title: "Flexible & Extensible Architecture",
        description:
          "Build on a composable architecture that adapts to your business needs and integrates with your existing systems.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Composability-5Oc0s7EpHvM7g18JJXlSIPHbdsH3Yu.png",
      },
      {
        id: "security-controls",
        title: "Granular Security Controls",
        description: "Implement fine-grained authorization rules to control access to content and functionality.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FineGrainedAuthorizationRules.jpg-kzDLoVwK7vQOZUITL3gP5BoNWgssTu.jpeg",
      },
      {
        id: "scalable-infrastructure",
        title: "Scalable & Secure Infrastructure",
        description:
          "Rely on a cloud-native platform designed for enterprise-grade performance, security, and scalability.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Architecture.jpg-TFZcSKMRl5tG6BQGTgsWUjr1Olmltg.webp",
      },
      {
        id: "seamless-auth",
        title: "Seamless Authentication",
        description: "Leverage pre-built authentication providers for quick and secure user access.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pre-BuiltAuthentication-57ekip8YbmmKySE1mxcjhsmjbFrJnh.png",
      },
      {
        id: "tailored-auth",
        title: "Tailored Authentication Options",
        description:
          "Implement custom authentication providers to meet specific security requirements and compliance standards.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CustomAuthenticationProviders-Qzk9av62J2a5CyAUB487V9f3QpfErl.png",
      },
    ],
  },
  {
    id: "content-authoring",
    title: "Content Authoring & Editing Experience",
    items: [
      {
        id: "flexible-authoring",
        title: "Flexible Next-Gen Content Authoring",
        description: "Create content with a modern, intuitive interface designed for marketers and content creators.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ContentAuthoringCapabilities-lTpyx7BZmP6Kcln0LIzUyLfRzGXnUA.png",
      },
      {
        id: "efficient-management",
        title: "Efficient & Scalable Content Management",
        description: "Manage content at scale with powerful reusability features and structured content models.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ContentReuseability.jpg-Zu9ZuhaV5bwovjd0cvHFzHtIVGqnTO.webp",
      },
      {
        id: "user-friendly",
        title: "User-Friendly & Minimal Training Required",
        description:
          "Get started quickly with an intuitive interface that requires minimal training for content authors.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simplicity-sMhbGGrRsk2bphWi7fEbvtkpOm7kmJ.png",
      },
      {
        id: "real-time-preview",
        title: "Real-Time Content Visualization",
        description: "Preview content changes in real-time across different devices and channels before publishing.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preview-3r27dAoFKNRBUWcjfLVHXBLVJpAG4w.png",
      },
      {
        id: "targeted-content",
        title: "Targeted & Dynamic Content Delivery",
        description: "Deliver personalized content experiences based on user behavior, preferences, and context.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalization-PbYyaOsa4W8OK4pk5vHOH4ZZSb4wFQ.png",
      },
      {
        id: "global-management",
        title: "Scalable Global Content Management",
        description: "Manage multiple sites and channels from a single platform with shared content and assets.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-site-LqFb3YkmvPdA8bcySFlpI0lkNUIH03.png",
      },
      {
        id: "multi-language",
        title: "Effortless Multi-Language Management",
        description: "Support global audiences with comprehensive multi-language content management capabilities.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Language-GTkCJchQcL4S0RNmjy9tQ6gfk8F77p.png",
      },
      {
        id: "asset-management",
        title: "Seamless Asset Access & Management",
        description: "Access and manage digital assets directly within the content authoring experience.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AssetManagementIntegration-WpO9geZViabuSUq6Be2UFfAz83MG3C.png",
      },
      {
        id: "compliance",
        title: "Compliance-Driven Content Optimization",
        description: "Optimize content for search engines and ensure compliance with accessibility standards.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEO-SJeVW9joAgLyEE1aX4e4rTTMJoo8NG.png",
      },
    ],
  },
  {
    id: "content-distribution",
    title: "Content Distribution & Governance",
    items: [
      {
        id: "api-first",
        title: "API-First, Headless Flexibility",
        description: "Distribute content to any channel or device with API-first, headless architecture.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Omnichannel.jpg-QqU7SPddtYHlmwrMFxTwuTudLNyPKu.jpeg",
      },
      {
        id: "governance",
        title: "Streamlined Content Governance",
        description: "Implement approval workflows and governance controls to maintain content quality and compliance.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Workflow-3sUBYwRWVu2YTjbPWgZTVohftd6Mak.png",
      },
      {
        id: "cross-device",
        title: "Cross-Device & External Previewing",
        description: "Preview content across different devices and share preview links with stakeholders for feedback.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preview-adAffKxeVkMw4krbpaF7tkwwYX2290.png",
      },
      {
        id: "webhooks",
        title: "Automated Content Triggers",
        description: "Set up webhooks to trigger external systems and processes when content changes.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Webhooks-yJ6rJrkYaroT1KkIPaz0YsOa0cOaym.png",
      },
      {
        id: "scheduling",
        title: "Automated & Timed Content Deployment",
        description: "Schedule content publishing for future dates and times to coordinate marketing campaigns.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SchedulePublishing-V5aX3Ud10UuqTaxVLdyRIfxDPHZApJ.png",
      },
      {
        id: "versioning",
        title: "Easily Roll Back Content",
        description: "Track content versions and roll back to previous versions when needed.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Versioning-DlYCUWpyKh8Y4BB6Qn1RiCaCMNPr97.png",
      },
    ],
  },
  {
    id: "development-experience",
    title: "Development Experience",
    items: [
      {
        id: "automated-deployments",
        title: "Automated & Scalable Deployments",
        description:
          "Deploy content and code changes with automated CI/CD pipelines for consistent and reliable releases.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DeployPortal-zP4SHSSs3lL6SYrh0jvgHCcEX2cDJd.png",
      },
      {
        id: "graphql-api",
        title: "Robust API for Content Management",
        description: "Access content via GraphQL API for flexible and efficient content delivery to any channel.",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GraphQL-Y6Mi2OeYKwReKna0zPw6uWCK3zWxBA.png",
      },
      {
        id: "isolated-environments",
        title: "Isolated & Scalable Environments",
        description: "Develop and test in isolated environments that mirror production for reliable deployments.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Integration%26Security-jPch9zZo1tuAa93iVbwgzRIm8Fdoif.png",
      },
      {
        id: "management-api",
        title: "Administer Platform via API",
        description: "Automate platform administration tasks with comprehensive management APIs.",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ManagementAPI-sbYVHLNz1QcyFF0KbIETXI5B6dErOX.png",
      },
    ],
  },
]

// Digital Asset Management data
export const damData: FeatureItem[] = [
  {
    id: "content-type-support",
    title: "Content Type Support",
    description: "Support for a wide range of content types including images, videos, documents, and more.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ContentTypeSupport-LRhbis4gDCy8BPxvwzJsuBe08mwJl4.png",
  },
  {
    id: "content-creation",
    title: "Content Creation & Manipulation",
    description: "Create and manipulate content directly within the platform with built-in editing tools.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ContentCreation%26Manipulation-ZwlMx1gRrf7d33yvAFi9wyZa8v7Ixy.png",
  },
  {
    id: "user-experience",
    title: "User Experience",
    description: "Intuitive user interface designed for marketers and content creators with minimal training required.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UserExperience-ifKi6pOTB4dN36XOKgIYslIlhhEHqs.png",
  },
  {
    id: "workflow-management",
    title: "Workflow Management & Digital Rights",
    description: "Manage content workflows and digital rights to ensure compliance and protect intellectual property.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WorkflowManagement%26DRM-dJqHXHLoJ9htydLhsJssYiLVOrJcWS.png",
  },
  {
    id: "omnichannel",
    title: "Omnichannel Smart Asset Distribution",
    description:
      "Distribute assets across channels with automatic format conversion and optimization for each channel.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Omnichannel-g4OcUlqIRv7A68fPRIATPZT406cNoc.png",
  },
  {
    id: "notification-system",
    title: "Notification System",
    description: "Stay informed with real-time notifications about content changes, approvals, and publishing events.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHNotifications-oLnVfe0Mz7XX100uPYkk415aJKFz36.png",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Track content performance and usage with comprehensive analytics and reporting tools.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reporting-mzZHTjcPbS3q5yZqDtRrNSGAfT0s3f.png",
  },
  {
    id: "integration",
    title: "Integration & Customization",
    description: "Integrate with existing systems and customize the platform to meet specific business requirements.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Integration%26Customization-g3pKDIWOqLaxK0qVqjeaSO4Y6qYav8.png",
  },
]

// Important Links data
export const importantLinksData: LinkItem[] = [
  {
    id: "documentation",
    title: "Documentation",
    links: [
      {
        text: "XM Cloud User Guide",
        url: "https://doc.sitecore.com/xmc",
      },
      {
        text: "Content Hub DAM User Guide",
        url: "https://doc.sitecore.com/ch",
      },
      {
        text: "Sitecore Developers Site",
        url: "https://developers.sitecore.com/",
      },
    ],
  },
  {
    id: "legal-hub",
    title: "Legal Hub",
    links: [
      {
        text: "Master Subscription Terms and Conditions",
        url: "https://www.sitecore.com/legal/master-subscription-terms-conditions",
      },
      {
        text: "Privacy and Security",
        url: "https://www.sitecore.com/legal/privacy-and-security",
      },
    ],
  },
]

