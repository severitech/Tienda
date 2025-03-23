import pool from '../config/bd.js'
pool.getConnection()
  .then(() => console.log("📡 Conectado a la base de datos"))
  .catch(err => console.error("❌ Error de conexión:", err));

export const getUsers = async (req, res) => {
  try {
    const [Resultados] = await pool.query("Select * from cartas")
    res.status(200).json(Resultados)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const getUserById = async (req, res) => {
  
  try {
    const {id} = req.params
    const [Resultados] = await pool.query("Select * from cartas where id = ?",[id])
    res.json(Resultados)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    const {name, descripcion } = req.body
    const [Resultado] = await pool.query("insert into cartas (Nombre,Descripcion)values (?,?);",[name,descripcion])
    res.status(200).json({message: "Usuario creado", id: Resultado.insertId, name: Resultado.name,descripcion: Resultado.descripcion})
  } catch (error) {
    req.status(500).json({message: "Error al crear el usuario"})
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Usuario ${id} actualizado` });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Usuario ${id} eliminado` }); 
};
