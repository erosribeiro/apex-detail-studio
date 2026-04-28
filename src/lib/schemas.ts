import { z } from "zod";

export const appointmentSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  modeloCarro: z
    .string()
    .min(2, "Modelo do carro é obrigatório")
    .max(100, "Modelo muito longo"),
  data: z.string().min(1, "Data é obrigatória"),
  hora: z.string().min(1, "Horário é obrigatório"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const serviceOptions = [
  { value: "lavagem", label: "Lavagem Técnica" },
  { value: "polimento", label: "Polimento" },
  { value: "protecao", label: "Proteção Cerâmica" },
  { value: "limpeza-interna", label: "Limpeza Interna" },
  { value: "outro", label: "Outro" },
];

export const timeSlots = [
  { value: "09:00", label: "09:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "17:00", label: "17:00" },
];