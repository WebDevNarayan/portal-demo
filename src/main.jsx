import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./layout/AppLayout";
import { registerLicense } from "@syncfusion/ej2-base";
import Dashboard from "./pages/Dashboard";
import BinManagement from "./pages/cms/BinManagement";
import CardProduct from "./pages/cms/CardProduct";
import VirtualCard from "./pages/cms/VirtualCard";
import TransactionLog from "./pages/cms/TransactionLog";
import AuditLogs from "./pages/AuditLogs";
import AstraStack from "./pages/AstraStack";
import RewardsDetails from "./pages/rewards/RewardsDetails";
import RewardsClaims from "./pages/rewards/RewardsClaims";
import RewardsAccount from "./pages/rewards/RewardsAccount";
import RewardsConfig from "./pages/rewards/RewardsConfig";
import AccountProduct from "./pages/cbs/AccountProduct";
import BaseInterest from "./pages/cbs/creditsetting/BaseInterest";
import ProductInterest from "./pages/cbs/creditsetting/ProductInterest";
import Journal from "./pages/cbs/Journal";
import BillingCycle from "./pages/cbs/BillingCycle";
import Rules from "./pages/Rules";
import Customer from "./pages/Customer";
import Settlement from "./pages/Settlement";
import User from "./pages/usermanagement/User";
import Roles from "./pages/usermanagement/Roles";
import ForexGroup from "./pages/forex/ForexGroup";
import CurrencyRate from "./pages/forex/CurrencyRate";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH1eeXRRRmBdVU13W0M="
);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "cms", // CMS parent route
        children: [
          { path: "bin", element: <BinManagement /> },
          { path: "cardproduct", element: <CardProduct /> },
          { path: "virtualcard", element: <VirtualCard /> },
          { path: "transactionlog", element: <TransactionLog /> },
        ],
      },
      {
        path: "cbs", // CMS parent route
        children: [
          { path: "accountproduct", element: <AccountProduct /> },
          { path: "journal", element: <Journal /> },
          { path: "billingcycle", element: <BillingCycle /> },
          {
            path: "creditsetting",
            children: [
              { path: "baseinterest", element: <BaseInterest /> },
              { path: "productinterest", element: <ProductInterest /> },
            ],
          },
        ],
      },
      { path: "settlement", element: <Settlement /> },
      { path: "rules", element: <Rules /> },
      { path: "customer", element: <Customer /> },
      {
        path: "usermanagement",
        children: [
          { path: "roles", element: <Roles /> },
          { path: "user", element: <User /> },
        ],
      },
      {
        path: "forex",
        children: [
          { path: "currencyrate", element: <CurrencyRate /> },
          { path: "forexgroup", element: <ForexGroup /> },
        ],
      },
      {
        path: "rewards",
        children: [
          { path: "config", element: <RewardsConfig /> },
          { path: "account", element: <RewardsAccount /> },
          { path: "claims", element: <RewardsClaims /> },
          { path: "details", element: <RewardsDetails /> },
        ],
      },
      { path: "auditlogs", element: <AuditLogs /> },
      { path: "astrastack", element: <AstraStack /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
