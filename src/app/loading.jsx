

const loading = () => {
    return (
        <div className="md:mt-96">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
            </div>
        </div>
    );
};

export default loading;