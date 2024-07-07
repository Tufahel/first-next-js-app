const DynamicProductPage = ({params, searchParams}) => {
    console.log(params);
    return (
        <div>
            <h1>This is dynamic product page/route {params.productId} and search category {searchParams.category}</h1>
        </div>
    );
};

export default DynamicProductPage;