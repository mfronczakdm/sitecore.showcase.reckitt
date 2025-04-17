export interface FeatureItem {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface SubItem {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface CategoryItem {
  id: string
  title: string
  items: SubItem[]
}

export interface VideoItem {
  id: string
  title: string
  videoUrl: string
  thumbnailUrl?: string
}

export interface LinkItem {
  id: string
  title: string
  links: {
    text: string
    url: string
  }[]
}

