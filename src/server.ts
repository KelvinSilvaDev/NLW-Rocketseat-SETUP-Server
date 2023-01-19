import { PrismaClient } from "@prisma/client";
import Cors from "@fastify/cors";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

app.register(Cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Realizar",
      },
    },
  });
  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("SERVIDOR ESCUTANDO NA PORTA 3333");
  });
