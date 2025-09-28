const Api = {
	apiUrl: 'https://promptflow.me/api',
};

// API Base Configuration
const API_BASE_URL = 'http://localhost:8000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken'); // Adjust based on your auth system
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Adjust based on AuthmateIntrospectionAuthentication
    };
};

// Chat API Functions
const chatAPI = {
    // GET /api/chats/ - List all chats for authenticated user
    list: async () => {
        const response = await fetch(`${API_BASE_URL}/chats/`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // POST /api/chats/ - Create new chat
    create: async (title = "New Chat") => {
        const response = await fetch(`${API_BASE_URL}/chats/`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ title })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // GET /api/chats/{id}/ - Get specific chat
    get: async (chatId) => {
        const response = await fetch(`${API_BASE_URL}/chats/${chatId}/`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // PATCH /api/chats/{id}/ - Update chat
    update: async (chatId, title) => {
        const response = await fetch(`${API_BASE_URL}/chats/${chatId}/`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify({ title })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // DELETE /api/chats/{id}/ - Delete chat
    delete: async (chatId) => {
        const response = await fetch(`${API_BASE_URL}/chats/${chatId}/`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return true;
    }
};

// Workflow API Functions
const workflowAPI = {
    // GET /api/workflows/ - List all workflows for authenticated user
    list: async () => {
        const response = await fetch(`${API_BASE_URL}/workflows/`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // POST /api/workflows/ - Create new workflow (with AI generation)
    create: async (prompt, chatId = null) => {
        const payload = { prompt };
        if (chatId) {
            payload.chat_id = chatId;
        }

        const response = await fetch(`${API_BASE_URL}/workflows/`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // GET /api/workflows/{id}/ - Get specific workflow
    get: async (workflowId) => {
        const response = await fetch(`${API_BASE_URL}/workflows/${workflowId}/`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // PATCH /api/workflows/{id}/ - Update workflow (only prompt field is writable)
    update: async (workflowId, prompt) => {
        const response = await fetch(`${API_BASE_URL}/workflows/${workflowId}/`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify({ prompt })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    },

    // DELETE /api/workflows/{id}/ - Delete workflow
    delete: async (workflowId) => {
        const response = await fetch(`${API_BASE_URL}/workflows/${workflowId}/`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return true;
    }
};

// Export for use in your React component
export { chatAPI, workflowAPI };

export default Api;