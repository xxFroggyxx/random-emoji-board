export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      'emoji-store': {
        Row: {
          id: number;
          emoji: string;
          count: number;
        };
        Insert: {
          id?: number;
          emoji: string;
          count: number;
        };
        Update: {
          id?: number;
          emoji?: string;
          count?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
