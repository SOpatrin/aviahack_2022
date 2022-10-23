import type { NextPage } from 'next';
import Card from '../../components/Card/Card';
import FileUpload from '../../components/FileUpload/FileUpload';
import Button from '../../components/Button/Button';

const Upload: NextPage = () => {
  return (
    <>
      <div className="w-full">
        <Card title="Загрузка данных">
          <p className="mt-2 text-slate-500">
            Для того, чтобы загрузить новые данные для расчёта, вставьте в форму
            ниже специально подготовленный csv файл
          </p>
          <div className="mt-6">
            <FileUpload />
          </div>
          <div className="mt-6">
            <Button active onClick={() => {}}>
              Загрузить
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Upload;
