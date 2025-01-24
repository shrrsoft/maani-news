import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/Components/theme-provider";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "Iranian Agency",
  description: "Persian News Agency",
};

export default async function RootLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

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
