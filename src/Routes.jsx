import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import TrainDetailsPage from './pages/train-details';
import LoginPage from './pages/login';
import SystemAdministration from './pages/system-administration';
import MainControlDashboard from './pages/main-control-dashboard';
import AuditTrail from './pages/audit-trail';
import DecisionSimulation from './pages/decision-simulation';
import PrivateRoute from "components/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes */}
          <Route
            path="/train-details"
            element={
              <PrivateRoute>
                <TrainDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/system-administration"
            element={
              <PrivateRoute>
                <SystemAdministration />
              </PrivateRoute>
            }
          />
          <Route
            path="/main-control-dashboard"
            element={
              <PrivateRoute>
                <MainControlDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/audit-trail"
            element={
              <PrivateRoute>
                <AuditTrail />
              </PrivateRoute>
            }
          />
          <Route
            path="/decision-simulation"
            element={
              <PrivateRoute>
                <DecisionSimulation />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
