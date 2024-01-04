'use client';
import React, { useEffect, useState } from 'react';
import { Resultado } from 'src/types/Types';
import { formatarBimestre, formatarData } from 'src/utils';
import ButtonDeleteGrade from './ButtonDeleteGrade';
import ButtonOpenModal from './ButtonOpenModal';
import Modal from '../modal/Modal';
import Nota from './Nota';
import Motion from '../common/Motion';
import Tooltip from '../common/ToolTip';

type PropsRow = {
  resultado: Resultado;
  handleAtualizarAvo: () => void;
  atualizarFilho: boolean;
};

const RowTable: React.FC<PropsRow> = ({
  resultado,
  handleAtualizarAvo,
  atualizarFilho
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dadosBimestre, setDadosBimestre] = useState<Resultado>(resultado);

  const dadosDeleteView: Resultado = {
    _id: dadosBimestre._id,
    bimestre: dadosBimestre.bimestre,
    createdAt: dadosBimestre.createdAt,
    disciplina: null,
    nota: null,
    updatedAt: null
  };

  useEffect(() => {
    setDadosBimestre(resultado);
  }, [resultado, atualizarFilho]);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between">
        <h1>Bimestre {formatarBimestre(dadosBimestre.bimestre)}</h1>
        <Tooltip text={'Adicionar'}>
          <ButtonOpenModal openModal={openModal} />
        </Tooltip>
      </div>
      {dadosBimestre.disciplina && (
        <Motion motionKey={'infoTable'}>
          <div className="flex flex-row items-start gap-4">
            <div
              className={`flex flex-col text-left h-36 w-40 rounded-2xl justify-between ${
                dadosBimestre.disciplina === 'Biologia'
                  ? 'bg-customPink'
                  : dadosBimestre.disciplina === 'Artes'
                    ? 'bg-customBlue'
                    : dadosBimestre.disciplina === 'Geografia'
                      ? 'bg-customBrown'
                      : 'bg-customPurple'
              }`}
            >
              <div>
                <h3 className="pl-4 pt-4 text-lg">
                  {dadosBimestre.disciplina}
                </h3>
                <p className="pl-4 text-xs">
                  {formatarData(dadosBimestre.updatedAt)}
                </p>
              </div>
              <Nota nota={dadosBimestre.nota || 0} />
            </div>
            <Tooltip text={'Remover'}>
              <ButtonDeleteGrade
                dadosBimestre={dadosBimestre}
                deleteView={() => setDadosBimestre(dadosDeleteView)}
              />
            </Tooltip>
          </div>
        </Motion>
      )}
      {isOpenModal && (
        <Motion motionKey={'modal'}>
          <Modal
            dadosBimestre={dadosBimestre}
            openModal={openModal}
            handleAtualizarAvo={handleAtualizarAvo}
          />
        </Motion>
      )}
    </div>
  );
};

export default RowTable;
