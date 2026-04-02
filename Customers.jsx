import React, { createContext, useState, useContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    return useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log('Adding to cart:', product);
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        
        // Provide visual feedback to the user
        const toast = document.createElement('div');
        toast.textContent = `${product.name} added to cart!`;
        toast.style.position = 'fixed';
        toast.style.top = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#4caf50';
        toast.style.color = 'white';
        toast.style.padding = '16px 24px';
        toast.style.borderRadius = '4px';
        toast.style.fontWeight = 'bold';
        toast.style.zIndex = '9999';
        toast.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
            )
        );
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', '').replace(',', ''));
            return total + price * item.quantity;
        }, 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
