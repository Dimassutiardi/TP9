import React, { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
  ],
};

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert("Angka habis dibagi 10!");
    }
  }, [count]);

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl mb-4">Counter Demo</h2>
      <p className="text-4xl mb-4">{count}</p>
      <div className="space-x-4">
        <button className="bg-green-500 px-4 py-2 rounded text-white" onClick={() => setCount(count + 1)}>+</button>
        <button className="bg-red-500 px-4 py-2 rounded text-white" onClick={() => setCount(count - 1)}>-</button>
        <button className="bg-gray-500 px-4 py-2 rounded text-white" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="text-xl font-bold">Dimas Ananda Sutiardi</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#profile" className="hover:underline">Profile</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {response.results.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.image} alt="Card Image" className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-sm mt-1">{item.body}</p>
          </div>
        ))}
      </div>

      <Counter />
    </div>
  );
}

export default App;
