export {default as Home} from './Home';
export {default as Login} from './Login';
export {default as Register} from './Register';
export {default as Products} from './Products';
export {default as Cart} from './Cart';
export {default as About} from './About';
export {default as Contact} from './Contact';
export {default as Checkout} from './Checkout'
export {default as PageNotFound} from './PageNotFound'

// No need to add product page because we will import it
// with React.lazy which requires the component to be exported 
// by default export.