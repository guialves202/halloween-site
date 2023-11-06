import { prisma } from "../src/database/prisma";
import { Categories } from "../src/utils/types";

async function main() {
  const abobora = await prisma.product.create({
    data: {
      name: 'Abóbora assombrada',
      description: 'Uma tenebrosa e assombrada abóbora pronta para aterrorizar a noite de suas vítimas',
      price: 15,
      category: Categories.ABOBORA,
      imageFilename: 'abobora.jpg'
    }
  })

  const caldeirao = await prisma.product.create({
    data: {
      name: 'Caldeirão mágico',
      description: 'Um grande caldeirão repleto de magia para dar vida às suas ideias mais horrendas',
      price: 49.9,
      category: Categories.CALDEIRAO,
      imageFilename: 'caldeirao.jpg'
    }
  })

  const chapeu = await prisma.product.create({
    data: {
      name: 'Chapéu de bruxa',
      description: 'É inexplicável mas você sente que nunca poderá se tornar uma bruxa de verdade sem esse chapéu, ele carrega algo além da sua compreensão',
      price: 23.5,
      category: Categories.CHAPEU,
      imageFilename: 'chapeu.jpg'
    }
  })

  const vassoura = await prisma.product.create({
    data: {
      name: 'Vassoura voadora',
      description: 'Você não pode ficar sem uma dessas, sempre pronta para te conduzir às suas vítimas!',
      price: 50,
      category: Categories.VASSOURA,
      imageFilename: 'vassoura.jpg'
    }
  })
}

for (let i = 0; i < 8; i++) {
  main()
}
