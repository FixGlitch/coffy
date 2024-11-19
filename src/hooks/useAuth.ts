import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { User, Session } from "@supabase/supabase-js";

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  // Listener de cambios en el estado de autenticación
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session: Session | null) => {
        setAuthState({
          user: session?.user || null,
          loading: false,
          error: null,
        });
      }
    );

    // Verifica el usuario actual al montar el hook
    const fetchUser = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;

        setAuthState({
          user: session?.user || null,
          loading: false,
          error: null,
        });
      } catch (error: any) {
        setAuthState({
          user: null,
          loading: false,
          error: error.message || "Error al obtener el usuario",
        });
      }
    };

    fetchUser();

    // Cleanup: Elimina el listener
    return () => {
      authListener?.subscription?.unsubscribe(); // Uso de subscription.unsubscribe
    };
  }, []);

  // Función para iniciar sesión
  const signIn = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setAuthState({
        user: data?.user || null, // Acceso correcto al user
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setAuthState({
        user: null,
        loading: false,
        error: error.message || "Error al iniciar sesión",
      });
    }
  };

  // Función para registrarse
  const signUp = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setAuthState({
        user: data?.user || null, // Acceso correcto al user
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setAuthState({
        user: null,
        loading: false,
        error: error.message || "Error al registrarse",
      });
    }
  };

  // Función para cerrar sesión
  const signOut = async () => {
    setAuthState((prev) => ({ ...prev, loading: true }));
    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      setAuthState({ user: null, loading: false, error: null });
    } catch (error: any) {
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || "Error al cerrar sesión",
      }));
    }
  };

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    signIn,
    signUp,
    signOut,
  };
};
