import MainLayout from '../components/mainLayout/mainLayout';

const getMainLayOut = (element) => {
  element.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };
};

export { getMainLayOut };
