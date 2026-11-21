# RP-SE-001 — Engenharia Social Baseada em Psicologia Reversa

**Título em inglês:** Reverse Psychology-Based Social Engineering  
**Categoria:** Engenharia social / manipulação psicológica  
**Estado:** Proposta de classificação descritiva, não reconhecida oficialmente como técnica independente pelo MITRE ATT&CK.

## Resumo
A psicologia reversa aplicada à engenharia social consiste em criar uma instrução, proibição ou provocação com a expectativa de que a pessoa reaja fazendo o contrário. O possível mecanismo é a **reatância psicológica**, relacionada ao desejo de preservar a autonomia, além de curiosidade e necessidade de demonstrar competência.

A técnica não funciona com todas as pessoas e não constitui, isoladamente, uma vulnerabilidade de software.

## Fundamento
Jack W. Brehm apresentou a teoria da reatância psicológica em 1966: uma liberdade percebida como ameaçada pode motivar tentativas de restaurá-la. A relação com engenharia social deve ser testada empiricamente, sem presumir eficácia universal.

## Exemplo hipotético para conscientização (ambiente autorizado)
Em uma campanha interna de treinamento, uma mensagem afirma: **"Documento reservado à equipe de segurança. Não tente descobrir o conteúdo."** Um link direciona exclusivamente para uma página simulada de treinamento, sem coletar credenciais, executar código ou acessar recursos reais. A equipe registra de forma agregada se a formulação desperta interesse e compara os resultados com uma mensagem neutra, respeitando consentimento e políticas internas.

## Modelo comportamental
1. Estímulo: proibição, desafio ou sugestão contrária.
2. Possível reação: curiosidade, reatância ou resistência à restrição.
3. Comportamento observável: interação com conteúdo ou recusa.
4. Avaliação: comparar com grupo de controle e explicar limitações.

## Contextos de risco
- **Phishing:** apelo à curiosidade para incentivar a abertura de links.
- **Pretexting:** narrativa provocativa para alterar decisões.
- **Baiting:** recurso apresentado como proibido ou restrito.
- **Divulgação de informações:** provocação que induz a pessoa a contestar uma afirmação fornecendo dados.

## Indicadores defensivos
Observe mensagens que usam exclusividade artificial, proibições provocativas ou desafios à capacidade do destinatário para pressionar decisões. Verifique a origem e o destino dos links; não tome decisões de segurança por impulso emocional.

## Relação com MITRE ATT&CK
- [T1566 — Phishing](https://attack.mitre.org/techniques/T1566/)
- [T1204 — User Execution](https://attack.mitre.org/techniques/T1204/)

Esses vínculos são **contextuais**, não uma atribuição oficial da classificação RP-SE-001 ao MITRE.

## Hipótese de pesquisa e validação
**Hipótese:** textos que restringem provocativamente o acesso podem gerar mais interações do que textos neutros, em determinadas populações e contextos.

**Validação sugerida:** estudo A/B com participação consentida, mensagens inofensivas, nenhum dado sensível e apresentação dos resultados com tamanho amostral, taxas, intervalos de confiança e eventuais vieses. Uma hipótese não é uma descoberta comprovada.

## Referência
Brehm, J. W. (1966). *A Theory of Psychological Reactance*. Academic Press.

---
**Autor da proposta de catalogação:** P0ystick / Tarcísio Luchesi.  
**Nota de originalidade:** Psicologia reversa e reatância são conceitos anteriores a esta proposta; o identificador RP-SE-001 é apenas uma convenção editorial deste catálogo.
