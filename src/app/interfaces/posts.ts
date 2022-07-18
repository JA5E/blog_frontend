export interface PostsResult{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Post[];
}
export interface Post{
    id: number;
    title: string;
    content: string;
    author: string;
    category: string;
    date: string;
    img: string;
}

export interface CommentsResult{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Comment[];
}
export interface Comment{
    id: number;
    content: string;
    author: string;
    date: string;
} 