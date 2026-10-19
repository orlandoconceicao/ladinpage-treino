export type Exercise = {
  name: string;
  sets: string;
  reps: string;
  unit: "repetições" | "segundos";
  description?: string;
};
export type Workout = {
  day: string;
  short: string;
  title: string;
  prep: string[];
  exercises: Exercise[];
  count: string;
};
const ex = (
  name: string,
  sets: string,
  reps: string,
  unit: Exercise["unit"] = "repetições",
): Exercise => ({ name, sets, reps, unit });
export const workouts: Workout[] = [
  {
    day: "Segunda-feira",
    short: "SEG",
    title: "Quadríceps + Panturrilha + Abdômen",
    prep: [
      "Bicicleta até a academia, em ritmo confortável",
      "Mobilidade de quadril, joelhos e tornozelos",
      "Séries leves de preparação antes dos exercícios principais",
    ],
    exercises: [
      ex("Agachamento livre", "4", "6–8"),
      ex("Leg press 45°", "3", "10–12"),
      ex("Cadeira extensora", "3", "12–15"),
      ex("Cadeira adutora", "3", "12–15"),
      ex("Panturrilha em pé", "4", "15–20"),
      ex("Abdominal remador", "3", "12–15"),
    ],
    count: "6 exercícios",
  },
  {
    day: "Terça-feira",
    short: "TER",
    title: "Costas A + Bíceps + Tríceps + Antebraço",
    prep: ["Mobilidade dos ombros", "Séries leves antes das puxadas e remadas"],
    exercises: [
      ex("Barra fixa ou puxada alta", "4", "6–10"),
      ex("Remada curvada", "3", "8–10"),
      ex("Remada baixa", "3", "8–12"),
      ex("Rosca direta", "3", "10–12"),
      ex("Tríceps corda", "3", "10–12"),
      ex("Rosca inversa", "2", "12–15"),
      ex("Isometria na barra", "2", "15–30", "segundos"),
    ],
    count: "7 exercícios",
  },
  {
    day: "Quarta-feira",
    short: "QUA",
    title: "Peito + Ombros",
    prep: [
      "Mobilidade dos ombros",
      "Séries leves de supino",
      "Preparação leve antes do desenvolvimento militar",
    ],
    exercises: [
      ex("Supino reto", "4", "6–8"),
      ex("Supino inclinado", "3", "8–10"),
      ex("Crucifixo na máquina", "3", "12–15"),
      ex("Desenvolvimento militar", "3", "8–10"),
      ex("Elevação lateral com halteres", "3", "12–15"),
      ex("Encolhimento com halteres", "3", "10–15"),
    ],
    count: "6 exercícios",
  },
  {
    day: "Quinta-feira",
    short: "QUI",
    title: "Posterior + Glúteos + Panturrilha + Abdômen",
    prep: [
      "Mobilidade de quadril",
      "Séries leves antes do levantamento terra romeno",
    ],
    exercises: [
      ex("Levantamento terra romeno", "4", "8–10"),
      ex("Mesa flexora", "3", "10–12"),
      ex("Elevação pélvica", "3", "10–12"),
      ex("Cadeira abdutora", "3", "12–15"),
      ex("Panturrilha em pé", "4", "15–20"),
      ex("Abdominal remador", "3", "12–15"),
    ],
    count: "6 exercícios",
  },
  {
    day: "Sexta-feira",
    short: "SEX",
    title: "Costas B + Bíceps + Tríceps + Antebraço",
    prep: [
      "Mobilidade dos ombros",
      "Séries leves de preparação antes das remadas e puxadas",
    ],
    exercises: [
      ex("Puxada alta ou barra fixa", "3", "8–12"),
      ex("Remada baixa com barra neutra(romena)", "3", "10–12"),
      ex("Triceps na polia com barra", "3", "12–15"),
      ex("Rosca martelo", "3", "10–12"),
      ex("Tríceps francês", "3", "10–12"),
      ex("Crucifixo invertido na máquina", "3", "12–15"),
      ex("Flexão de punho com halteres", "2", "12–15"),
    ],
    count: "7 exercícios",
  },
];
