import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useReducer,
} from 'react';

export const StoreContext = createContext();

const status = {
  headerStatus: true,
  buttonsStatus: false,
  productStatus: false,
  cartStatus: false,
};

function reducer(state, { type }) {
  switch (type) {
    case 'item-selected':
      return { ...state, productStatus: true };
    case 'api-request-finished':
      return { ...state, buttonsStatus: true };
    case 'open-cart':
      return {
        headerStatus: false,
        buttonsStatus: false,
        productStatus: false,
        cartStatus: true,
      };
    case 'close-cart':
      return {
        headerStatus: true,
        buttonsStatus: true,
        productStatus: false,
        cartStatus: false,
      };
    case 'close-product':
      return { ...state, productStatus: false };
  }
}

function StoreContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const notificationRef = useRef();
  const [state, dispatch] = useReducer(reducer, status);
  const [api, setApi] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto'
      ).then(response => response.json());

      setApi(response);
      dispatch({ type: 'api-request-finished' });
    })();
  }, []);

  useEffect(() => {
    clearTimeout(notificationRef.current);

    notificationRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  }, [notification]);

  function openCart() {
    dispatch({ type: 'open-cart' });
  }

  function closeCart() {
    dispatch({ type: 'close-cart' });
  }

  function closeProduct(item) {
    setProduct(null);
    setNotification(<p>{item.nome} fechado.</p>);
    dispatch({ type: 'close-product' });
  }

  function selectItem(item) {
    setProduct(item);
    setNotification(<p>{item.nome} selecionado.</p>);
    dispatch({ type: 'item-selected' });
  }

  function isInCart(item) {
    if (cart.includes(item)) return true;
    else return false;
  }

  function removeItemFromCart(item) {
    setCart(prevState => prevState.filter(element => element !== item));
    setNotification(<p>O item {item.nome} foi removido do carrinho.</p>);
  }

  function addItemToCart(item) {
    setCart(prevState => [...prevState, item]);
    setNotification(<p>O item {item.nome} foi adicionado ao carrinho.</p>);
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        selectItem,
        product,
        addItemToCart,
        notification,
        isInCart,
        removeItemFromCart,
        state,
        api,
        openCart,
        closeCart,
        closeProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
