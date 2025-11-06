export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 ">
      <div className="container mx-auto text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Yeji MUA — All Rights Reserved</p>
        <p className="mt-2">
          Follow me on{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-primary hover:underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}
