import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";
import { ThemeProvider } from "@/Components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "Iranian Agency",
  description: "Persian News Agency",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${inter.className} ${vazir.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange>
            <Header locale={locale} />
            <div className="md:max-w-7xl mx-auto font-[Vazirmatn]">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
