import { AppDataSource } from '../data-source';
import { Hero } from '../models/interfaces/HeroInterface';

/**
 * Le role du service est d'aller chercher les données,
 * pour les mettre à disposition de controlleur.
 */
export class HeroService {
  getAllHeros(): Promise<Hero[]> {
    return AppDataSource.query(`SELECT * FROM hero;`);
  }

  getOneHeroById(id: number): Promise<Hero> {
    return AppDataSource.query(`SELECT * from hero WHERE hero.id=${id};`);
  }

  createNewHero(newHero: Hero): Promise<any> {
    return AppDataSource.query(
      `INSERT INTO hero (name, power, life,id_type_weapon) VALUES ('${newHero.name}', ${newHero.power}, ${newHero.life},${newHero.id_type_weapon});`
    );
  }

  updateOneHero(id: number, changes: Hero): Promise<any> {
    console.log(id);
    return AppDataSource.query(`UPDATE hero
SET name= '${changes.name}',
    power= ${changes.power},
    life= ${changes.life}
WHERE hero.id=${id};`);
  }

  deleteOneHero(id: number): Promise<any> {
    console.log(id);
    return AppDataSource.query(`DELETE  FROM hero
    WHERE id=${id}
    `);
  }
}
