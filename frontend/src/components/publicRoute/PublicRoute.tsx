import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = () => {
  // A lógica é a mesma: pegamos o estado de autenticação e o de carregamento.
  const { isAuthenticated, loading } = useAuth();

  // Enquanto estiver carregando, esperamos para não tomar uma decisão precipitada.
  if (loading) {
    return <div>Carregando...</div>; 
  }

  // A LÓGICA INVERTIDA:
  // Se o usuário ESTIVER autenticado, redirecione para a página '/choose'.
  // Se NÃO estiver, permita o acesso à página pública (Login/Register).
  return (
    isAuthenticated ? <Navigate to="/choose" /> : <Outlet />
  );
};
  
export default PublicRoute;