import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CreateUserIF } from "../utils/interfaces/state-interfaces/CreateUserState";

export const useCreateUser = create<CreateUserIF>()(
  persist(
    (set, get) => ({
      name: '',
      setName: (name) => set({ name }),

      email: '',
      setEmail: (email) => set({ email }),

      password: '',
      setPassword: (password) => set({ password }),

      confirmPassword: '',
      setConfirmPassword: (password) => set({ confirmPassword: password }),

      nameError: '',
      setNameError: (error) => set({ nameError: error }),

      emailError: '',
      setEmailError: (error) => set({ emailError: error }),

      passwordError: '',
      setPasswordError: (error) => set({ passwordError: error }),

      confirmPasswordError: '',
      setConfirmPasswordError: (error) => set({ confirmPasswordError: error }),
    }),
    {
      name: 'userName-storage',
      partialize: (state) => ({ name: state.name, password: state.password, email: state.email}), 
    }
  )
);
