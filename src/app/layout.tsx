import "../index.scss";
import { Metadata } from "next";
import LayoutProvider from "./Provider";
import NoSsr from "@/utils/NoSsr";
import { detectLanguage } from "./i18n/server";
import { I18nProvider } from "./i18n/i18n-context";
import ErrorBoundary from "@/CommonComponents/ErrorBoundry";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import SessionWrapper from "@/CommonComponents/SessionWrapper";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Viho - Premium Admin Template",
  description: "Viho - Premium Admin Template",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <title>Viho - Premium Admin Template</title>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap' rel='stylesheet' />
          <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
        </head>
        <body className='light-only'>
          <ErrorBoundary>
            <NoSsr>
              <SessionWrapper session={session}>
                <LayoutProvider>{children}</LayoutProvider>
                <ToastContainer />
              </SessionWrapper>
            </NoSsr>
          </ErrorBoundary>
        </body>
      </html>
    </I18nProvider>
  );
}
