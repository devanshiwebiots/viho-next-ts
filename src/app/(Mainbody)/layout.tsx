"use client";
import Header from "@/Component/Header/Header";
import SideBarSection from "@/Component/SideBar";
import Themecustomizer from "@/Component/ThemeCustomizer";
import { RootState } from "@/Redux/ReduxStore";
import { usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Footer from "@/Component/Footer";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children, classNames, ...rest }: { children: React.ReactNode; classNames: string }) {
  const { sideBarType } = useSelector((store: RootState) => store.themeSlice);
  const backgroundColor = useSelector((store: RootState) => store.headerSlice.backGroundChange);
  const pathname = useSearchParams();
  const path = usePathname();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        document.getElementById("page-wrapper")?.classList.remove("horizontal-wrapper");
        document.getElementById("page-wrapper")?.classList.add("compact-wrapper");
      } else if (sideBarType != "horizontal-wrapper") {
        document.getElementById("page-wrapper")?.classList.remove("horizontal-wrapper");
        document.getElementById("page-wrapper")?.classList.add("compact-wrapper");
      } else {
        document.getElementById("page-wrapper")?.classList.add("horizontal-wrapper");
        document.getElementById("page-wrapper")?.classList.remove("compact-wrapper");
      }
    });
  }, [sideBarType]);

  return (
    <div id='mainLayout' className={`${backgroundColor}`}>
      <div className={`page-wrapper ${sideBarType} ${pathname.get("layout")}`} id='page-wrapper'>
        <Header />
        <div className='page-body-wrapper horizontal-menu'>
          <SideBarSection />
          <div className='page-body'> {children}</div>
          <Footer />
        </div>
      </div>
      <Themecustomizer />
      <ToastContainer/>
    </div>
  );
}
