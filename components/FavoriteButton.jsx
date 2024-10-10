"use client";
import { useEffect, useState } from "react";

export default function FavoriteButton({ animalId }) {
  // 찜 목록
  const [favorite, setFavorite] = useState([]);
  // 버튼 상태를 결정할 상태
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(favorite);

  useEffect(() => {
    // 찜목록 데이터 받아오기
    fetch(`http://localhost:3000/api/favorite`)
      .then((res) => res.json())
      .then((res) => {
        setFavorite(res);
        res.includes(animalId) ? setIsFavorite(true) : null;
      });
  }, [isFavorite]);

  const handler = () => {
    const method = isFavorite ? "DELETE" : "POST";
    fetch(`http://localhost:3000/api/favorite/${animalId}`, { method }).then(
      (res) => setIsFavorite((prev) => !prev)
    );
  };
  return <button onClick={handler}>{isFavorite ? "💚" : "🩶"}</button>;
}
