const SearchedImageItemTemplate = ({ data }) => {
  return (
    <div
      className="group flex flex-col py-3 cursor-pointer"
      onClick={() => window.open(data.image.contextLink)}
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h[120px] lg:h-[140px] group-hover:shadow-c">
        <img src={data.link} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="text-sm text-[#70757a] pt-2">{data.displayLink}</div>
      <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">
        {data.title}
      </div>
    </div>
  );
};

export default SearchedImageItemTemplate;
