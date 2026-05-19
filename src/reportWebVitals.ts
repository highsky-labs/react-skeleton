import { MetricType } from "web-vitals";

const reportWebVitals = (onPerfEntry?: MetricType) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then((wv: any) => {
      // use runtime property access to avoid type errors with differing web-vitals exports
      wv.getCLS?.(onPerfEntry);
      wv.getFID?.(onPerfEntry);
      wv.getFCP?.(onPerfEntry);
      wv.getLCP?.(onPerfEntry);
      wv.getTTFB?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;
