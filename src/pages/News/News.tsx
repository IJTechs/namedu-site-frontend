import Breadcrumb from '@/components/shared/BreadCrumb';
import ShareNews from '@/components/shared/ShareNews';

const NewsPage = () => {
  return (
    <div className="min-h-screen h-max max-w-5xl w-full mx-auto relative  p-4 sm:p-6 md:p-8">
      <div className="relative -top-10 w-full flex flex-col gap-6">
        {/* News Title */}
        <div className="w-full bg-white h-[60px] sm:h-[80px] rounded-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl text-primary-heading font-semibold shadow-sm">
          <h1 className="text-center px-4">News title</h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-3 sm:my-5">
          <Breadcrumb />
        </div>

        {/* News Content */}
        <div className="text-justify leading-relaxed font-light text-base sm:text-lg md:text-xl h-full  p-4 sm:p-6 md:p-8 rounded-12 ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            accusantium iste dicta beatae doloremque a quidem officiis repellat
            unde deleniti repellendus ea numquam, voluptatem placeat error totam
            dolorem consectetur eum itaque sed? Mollitia beatae eum voluptatum
            eos, iste, magni sed reiciendis ad commodi cumque quaerat sapiente
            labore eligendi animi adipisci.
          </p>
          <p className="mt-4">
            Veniam, voluptatibus harum quisquam neque accusamus sequi ipsam
            exercitationem iste temporibus pariatur eligendi soluta voluptas
            accusantium dolore nisi optio porro.
          </p>
        </div>

        {/* Separator */}
        <span className="w-full h-[1px] bg-gray-200 shadow-sm"></span>

        {/* Share News Section */}
        <div className="w-full">
          <ShareNews newsTitle="News title" newsUrl="https://example.com" />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
