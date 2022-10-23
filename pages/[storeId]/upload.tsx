import type { NextPage } from 'next';
import Card from '../../components/Card/Card';
import FileUpload from '../../components/FileUpload/FileUpload';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { uploadData } from '../../api/api';

const Upload: NextPage = () => {
  const [file, setFile] = useState<File>();

  return (
    <>
      <div className="w-full">
        <Card title="Загрузка данных">
          <p className="mt-2 text-slate-500">
            Для того, чтобы загрузить новые данные для расчёта, вставьте в форму
            ниже специально подготовленный csv файл
          </p>
          <div className="mt-6">
            <FileUpload onChange={setFile} />
          </div>
          <div className="mt-6">
            <Button active onClick={() => file && uploadData(file)}>
              {file ? 'Загрузить' : 'Выберите файл'}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Upload;
