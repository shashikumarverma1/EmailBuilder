export interface EmailTemplate {
    id?: string;
    title: string;
    content: string;
    imageUrl: any;
    footer: string;
    created_at?: string;
  }
  
  export interface EmailLayout {
    html: string;
  }