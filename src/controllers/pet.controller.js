import connection from "../database/connection.js";

export const pet = {
    get: async (request, response) => {
        const mysql = "SELECT * FROM pets.dogs";
        connection.connect(error => {
            if (error) throw error;
            connection.query(mysql, async (error, result, fields) => {
                if (error) throw error;
                return await response.status(200).send(result);
            });
        });
    },

    get_by_id: (request, response) => {
        const { id } = request.params;

        connection.query('SELECT * FROM pets.dogs WHERE id = ?', [id], (error, result) => {
            if (error) throw error;
            return response.send(result);
        });
    },

    post: (request, response) => {
        const { breed, life_span, breed_traits, description, weight } = request.body;

        const pet = {
            breed: breed,
            life_span: life_span,
            breed_traits: breed_traits,
            description: description,
            weight: weight
        };

        connection.query('INSERT INTO pets.dogs SET ?', pet, (error) => {
            if (error) throw error;
            response.status(201).send(`Pet: "${pet.breed}" created!`)
        });
    },

    put: (request, response) => {
        const { id } = request.params;
        const { breed, life_span, breed_traits, description, weight } = request.body;

        const query = `UPDATE dogs SET breed = '${breed}', life_span = '${life_span}', breed_traits = '${breed_traits}', description = '${description}', weight = '${weight}' WHERE id = ${id}`;

        connection.query(query, (error, result, fields) => {
            if (error) throw error
            return response.status(200).send("Pet has been updated!")
        });
    },

    delete: (request, response) => {
        const { id } = request.params;

        const delete_query = `DELETE FROM pets.dogs WHERE id = ${id}`;

        connection.query(delete_query, (error, result) => {
            if (error) throw error;
            return response.status(200).send("Pet successfully deleted");
        });
    },
};