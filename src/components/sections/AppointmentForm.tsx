"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "@/lib/schemas";

const GAS_ENDPOINT = "YOUR_GOOGLE_APPS_SCRIPT_URL";

interface AppointmentFormProps {
  className?: string;
}

export function AppointmentForm({ className }: AppointmentFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(GAS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar agendamento");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Erro ao enviar agendamento. Tente novamente."
      );
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={`${className} p-8 rounded-2xl bg-surface border border-border`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-text-primary mb-2">
            Agendamento Solicitado!
          </h3>
          <p className="text-text-secondary mb-6">
            Entraremos em contato em breve para confirmar seu horário.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="text-gold font-medium hover:underline"
          >
            Fazer novo agendamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} space-y-6`}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-text-secondary mb-1.5"
          >
            Nome Completo *
          </label>
          <input
            id="nome"
            type="text"
            {...register("nome")}
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="Seu nome"
          />
          {errors.nome && (
            <p className="mt-1.5 text-sm text-red-500">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="modeloCarro"
            className="block text-sm font-medium text-text-secondary mb-1.5"
          >
            Modelo do Carro *
          </label>
          <input
            id="modeloCarro"
            type="text"
            {...register("modeloCarro")}
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="Ex: Toyota Corolla, BMW X5..."
          />
          {errors.modeloCarro && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.modeloCarro.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="data"
              className="block text-sm font-medium text-text-secondary mb-1.5"
            >
              Data *
            </label>
            <input
              id="data"
              type="date"
              {...register("data")}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
            {errors.data && (
              <p className="mt-1.5 text-sm text-red-500">{errors.data.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="hora"
              className="block text-sm font-medium text-text-secondary mb-1.5"
            >
              Horário *
            </label>
            <select
              id="hora"
              {...register("hora")}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            >
              <option value="">Selecione</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
            {errors.hora && (
              <p className="mt-1.5 text-sm text-red-500">{errors.hora.message}</p>
            )}
          </div>
        </div>
      </div>

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gold text-background font-semibold rounded-lg transition-all duration-200 hover:bg-goldLight focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitStatus === "loading" ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </>
        ) : (
          "Solicitar Agendamento"
        )}
      </button>
    </form>
  );
}