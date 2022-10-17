import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  const users = await prisma.user.createMany({
    data: [{
      name: "Luffy",
      email: "luffy@sea.com",
      age: 27,
    }],
  })

  console.log(users)

  const user = await prisma.user.findUnique({
    where: {
      email: "luffy@sea.com",
    }
  })

  console.log(user)
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
