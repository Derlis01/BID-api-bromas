import Jokes from '../models/Jokes.js';
import Joke from '../models/Jokes.js'

export async function addJoke(req, res) {
    const joke = new Joke(req.body);
    try {
      await joke.save();
      return res.status(200).send({ message: 'Joke added successfully' });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
}

export async function showJokes(req, res) {
    try {
      const jokes = await Joke.find();
      res.json(jokes);
    } catch (err) {
      res.status(500).json({ message: 'No se pueden mostrar los chistes. Intente de nuevo más tarde.' });
    }
  }

export async function showJokesById(req, res) {

  const { id } = req.params

  try {
    const jokes = await Joke.findById(id);
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ message: 'No se pueden mostrar los chistes. Intente de nuevo más tarde.' });
  }
}


export async function updateJoke(req, res) {

  const { id } = req.params

  const { setup, punchline } = req.body
  try {

    const newDada = await Joke.updateOne({ _id: id }, {$set: {setup, punchline}})
    res.status(200).json({ message: `Se actualizo el chiste con el id: ${id}`, joke: newDada });

  } catch (err) {
      res.status(500).json({ message: 'Hubo un error al intentar actualizar el chiste' });
  }
}

export async function deleteJoke(req, res) {

  const { id } = req.params

  try {
    const newDada = await Joke.deleteOne({ _id: id })
    res.status(200).json({ message: `Se elimino el chiste con el id: ${id}` });

  } catch (err) {
      res.status(500).json({ message: 'Hubo un error al intentar eliminar el chiste' });
  }
}