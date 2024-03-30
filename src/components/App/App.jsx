import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchCards from "../API/API";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allData, setAllData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === "") return;

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchCards(query, page);
        if (data.lenght === 0) {
          toast("No results found");
          setAllData(true);
        } else {
          setImages((prevImages) => {
            return [...prevImages, ...data];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = async (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setAllData(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery images={images} onOpen={openModal} />}

      {!allData && images.length > 0 && !isLoading && (
        <LoadMoreBtn page={page} setPage={setPage} />
      )}

      <ImageModal
        onOpen={showModal}
        onClose={closeModal}
        image={selectedImage}
      />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
