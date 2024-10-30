"use client";
import { Product, ProductContextType } from '@/types/product';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [minRating, setMinRating] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) throw new Error('Erreur lors de la récupération des produits');
            const data = await response.json();
            setProducts(data.products);
            setFilteredProducts(data.products);
            setIsLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            setIsLoading(false);
        }
    };

    const filterByRating = (rating: number) => {
        setMinRating(rating);
        const filtered = products.filter((product) => product.rating >= rating);
        setFilteredProducts(filtered);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                isLoading,
                error,
                filterByRating,
                minRating
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts doit être utilisé à l\'intérieur d\'un ProductProvider');
    }
    return context;
}