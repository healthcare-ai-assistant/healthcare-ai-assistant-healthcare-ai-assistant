
export const API_BASE_URL = 'https://d3.deltauniv.edu.eg/api';

interface RequestOptions extends RequestInit {
  token?: string;
}

export const api = {
  get: async <T>(endpoint: string): Promise<T | null> => {
    try {
      const token = localStorage.getItem('auth_token');
      const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.warn(`Failed to fetch from ${endpoint}, falling back to mock data.`, error);
      return null;
    }
  },

  post: async <T>(endpoint: string, body: any): Promise<T | null> => {
    try {
      const token = localStorage.getItem('auth_token');
      const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.warn(`Failed to post to ${endpoint}`, error);
      // For demo purposes, strictly rethrow login errors if you want to force API usage, 
      // but here we return null to allow the UI simulation to continue if API is unreachable.
      return null; 
    }
  }
};
