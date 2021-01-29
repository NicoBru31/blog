export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-gray-500 mt-10 p-6'>
      <p>{`Nicolas Bruère ${new Date().getFullYear()}`}</p>
    </footer>
  );
}
