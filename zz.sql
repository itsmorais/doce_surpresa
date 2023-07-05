CREATE OR REPLACE VIEW conexao_view AS
SELECT gid,
  id,
  CASE
    WHEN cnx_estado_operacao = 'Ativo' THEN 'True'
    ELSE 'False'
  END AS cnx_estado_operacao,
  cnx_tipo,
  cnx_diam_entr_mm,
  cnx_diam_sai_mm,
  cnx_material,
  cnx_dt_classificacao,
  cnx_dt_atualizacao,
  geom,
  cnx_vazao,
  cnx_rotacao,
  cnx_observacao,
  'Municipio',
  water,
  cnx_cota
FROM public.conexao;