import React from "react";
import Script from "next/script";

interface SchemaOrgProps {
  type: "Organization" | "Service" | "FAQPage" | "WebSite" | "LocalBusiness" | string;
  data: Record<string, any>;
}

/**
 * Компонент для добавления микроразметки Schema.org
 */
const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Script
      id={`schema-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default SchemaOrg; 