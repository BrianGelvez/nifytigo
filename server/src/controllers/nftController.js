const { nfts, users, categories } = require('../db.js');


const allNft = async (name) => {
  const allNftsDb = await nfts.findAll({
    include: [{
      model: users,
      attributes: ["name"],
    },
    {
      model: categories,
      as: 'categories', // Usa el alias definido en el modelo
      attributes: ["name"],
      through: { attributes: [] },
    }]
  });

  if (name) {
    
    let filterNft = allNftsDb.filter((nft) => 
      nft.name.toLowerCase().includes(name.toLowerCase()));
    //validacion para que no devuelva un array u objeto vacio 

    if (!filterNft.length)
      throw new Error(`No se encontro el Nft con el nombre ${name}`);
    return filterNft;
  }
  return allNftsDb;
};


const createNft = async (iduser, name, description, image, price, cate) => {
  const newNft = await nfts.create({ name, description, image, price });
  await newNft.setUser(iduser);
  for (const cateName of cate) {
    
    const cat = await categories.findOne({ where: { name: cateName } });
    
    if (cat) {     
      await newNft.addCategories(cat);
    }
  }
  return newNft;
};


const getNftById = async (id) => {
  try {
    const nft = await nfts.findByPk(id,{include: [{
      model: users,
      attributes: ["name","id"],
    },
    {
      model: categories,
      as: 'categories', // Usa el alias definido en el modelo
      attributes: ["name"],
      through: { attributes: [] },
    }],});
    return (
      {
        id: nft.id,
        name: nft.name,
        description: nft.description,
        image: nft.image,
        price: nft.price,
        user:nft.user.name,
        userid: nft.user.id,
        categories: nft.categories
      });
  } catch (error) {
    throw new Error('Error retrieving NFT');
  }
};



const deleteNft = async (id) => {
  const deleteNft = await nfts.destroy({where: { id: id} });
  return deleteNft;
};


const updateNftDescription = async (id, description) => {
  const nft = await nfts.findByPk(id);
  if (!nft) {
    throw new Error('No se encontró la NFT con ese ID');
  }

  nft.description = description;
  await nft.save();

  return nft;
};




module.exports = { allNft, createNft, deleteNft, updateNftDescription, getNftById };
