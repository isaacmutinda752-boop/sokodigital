import { Routes, Route } from 'react-router-dom';
import AffiliateProgram from './Pages/AffiliateProgram.tsx';
import ForSellers from './Pages/ForSellers.tsx';
import MarketPlace from './Pages/MarketPlace.tsx';
import Goal from './Pages/Goal.tsx';
import Community from './Pages/Community.tsx';
import SellersCreateAccount from './Components/SellersCreateAccount.tsx';
import SellersLoginAccount from './Components/SellersLoginAccount.tsx';
import AffiliateLoginAccount from './Components/AffiliateLoginAccount.tsx';
import AffiliateCreateAccount from './Components/AffiliateCreateAccount.tsx';
import JoinTheCommunityAccount from './Components/JoinTheCommunityAccount.tsx';
import CommunityLogin from './Components/CommunityLogin.tsx';
import AccountSelector from './Components/AccountSelector.tsx';
import LoginSelector from './Components/LoginSelector.tsx';
import HowToUploadProductsForm from './Components/HowToUploadProductsForm.tsx';
import EmailConfirmation from './Components/EmailConfirmation.tsx';
import ProductsAreaAll from './Components/ProductsAreaAll.tsx';
import GreatCreatorsStore from './Components/GreatCreatorsStore.tsx';
import MpesaCheckout from './Components/MpesaCheckout.tsx';
import MpesaLearnMore from './Components/MpesaLearnMore.tsx';
import CategoriesProductsAll from './Components/CategoriesProductsAll.tsx';
import SimpleTransparentForm from './Components/SimpleTransparentForm.tsx';
import CommunityExploreChannels from './Components/CommunityExploreChannels.tsx';
import CommunityLearnMore from './Components/CommunityLearnMore.tsx';
import EachCommunityChannel from './Components/EachCommunityChannel.tsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MarketPlace />} />
      <Route path="/for-sellers" element={<ForSellers />} />
      <Route path="/affiliate-program" element={<AffiliateProgram />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/explore" element={<CommunityExploreChannels />} />
      <Route path="/community/learn-more" element={<CommunityLearnMore />} />
      <Route path="/community/channel/:id" element={<EachCommunityChannel />} />
      <Route path="/goal" element={<Goal />} />
      <Route path="/SellersCreateAccount" element={<SellersCreateAccount />} />
      <Route path="/SellersLoginAccount" element={<SellersLoginAccount />} />
      <Route path="/AffiliateCreateAccount" element={<AffiliateCreateAccount />} />
      <Route path="/AffiliateLoginAccount" element={<AffiliateLoginAccount />} />
      <Route path="/JoinTheCommunityAccount" element={<JoinTheCommunityAccount />} />
      <Route path="/CommunityLogin" element={<CommunityLogin />} />
      <Route path="/signup" element={<AccountSelector />} />
      <Route path="/login" element={<LoginSelector />} />
      <Route path="/HowToUploadProductsForm" element={<HowToUploadProductsForm />} />
      <Route path="/EmailConfirmation" element={<EmailConfirmation />} />
      <Route path="/all-products" element={<ProductsAreaAll />} />
      <Route path="/creator-store/:id" element={<GreatCreatorsStore />} />
      <Route path="/checkout" element={<MpesaCheckout />} />
      <Route path="/mpesa-learn-more" element={<MpesaLearnMore />} />
      <Route path="/category/:categoryName" element={<CategoriesProductsAll />} />
      <Route path="/seller-registration" element={<SimpleTransparentForm />} />
    </Routes>
  );
}

export default App;