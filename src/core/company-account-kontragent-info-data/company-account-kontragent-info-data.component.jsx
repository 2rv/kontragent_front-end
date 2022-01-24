import { Divider, Grid, Typography } from '@mui/material';

export function CompanyAccountKontragentInfoDataComponent(props) {
  const {
    data: {
      // req

      shortName,
      inn,
      ogrn,
      dissolved,
      kpp,
      okpo,
      okato,
      okfs,
      oktmo,
      okogu,
      okopf,
      opf,
      fullName,
      date,

      address,

      status,
      registrationDate,
      dissolutionDate,
      heads,
      fio,

      // egrDetails

      pfr,
      fss,
      foms,
      mainActivity,
      capitalSum,
      capitalDate,
      registrationInfoNalog,
    },
  } = props;
  return (
    <Grid container spacing={4}>
      <Grid item>
        {shortName && <Typography variant="title" children={shortName} />}

        {fio && <Typography variant="title" children={'ИП ' + fio} />}
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item container spacing={3}>
        {fullName && (
          <Grid item>
            <Typography children={fullName} />
            <Typography variant="subtext" children={date} />
          </Grid>
        )}

        <Grid item container>
          <Grid item>
            <Typography variant="listTitle" children={'Состояние: '} />
            <Typography
              variant="listContent"
              children={status}
              sx={dissolved ? { color: 'red' } : { color: 'green ' }}
            />
          </Grid>

          {registrationDate && (
            <Grid item>
              <Typography variant="listTitle" children={'Дата регистрации: '} />
              <Typography variant="listContent" children={registrationDate} />
            </Grid>
          )}

          {dissolutionDate && (
            <Grid item>
              <Typography
                variant="listTitle"
                children={'Дата прекращения деятельности: '}
              />
              <Typography variant="listContent" children={dissolutionDate} />
            </Grid>
          )}
        </Grid>

        <Grid item container>
          <Grid item>
            <Typography variant="listTitle" children={'ИНН: '} />
            <Typography variant="listContent" children={inn} />
          </Grid>

          {kpp && (
            <Grid item>
              <Typography variant="listTitle" children={'КПП: '} />
              <Typography variant="listContent" children={kpp} />
            </Grid>
          )}

          <Grid item>
            <Typography variant="listTitle" children={'ОГРН: '} />
            <Typography variant="listContent" children={ogrn} />
          </Grid>
        </Grid>

        {address && (
          <Grid item container>
            {address.regionCode && (
              <Grid item>
                <Typography variant="listTitle" children={'Код региона: '} />
                <Typography
                  variant="listContent"
                  children={address.regionCode}
                />
              </Grid>
            )}

            {address.zipCode && (
              <Grid item>
                <Typography
                  variant="listTitle"
                  children={'Почтовый индекс: '}
                />
                <Typography variant="listContent" children={address.zipCode} />
              </Grid>
            )}

            {address.region && (
              <Grid item>
                <Typography variant="listTitle" children={'Область/Регион: '} />
                <Typography variant="listContent" children={address.region} />
              </Grid>
            )}

            {address.city && (
              <Grid item>
                <Typography variant="listTitle" children={'Город: '} />
                <Typography variant="listContent" children={address.city} />
              </Grid>
            )}

            {address.street && (
              <Grid item>
                <Typography variant="listTitle" children={'Улица: '} />
                <Typography variant="listContent" children={address.street} />
              </Grid>
            )}

            {address.house && (
              <Grid item>
                <Typography variant="listTitle" children={'Дом: '} />
                <Typography variant="listContent" children={address.house} />
              </Grid>
            )}

            {address.settlement && (
              <Grid item>
                <Typography variant="listTitle" children={'Поселение: '} />
                <Typography
                  variant="listContent"
                  children={address.settlement}
                />
              </Grid>
            )}

            {address.district && (
              <Grid item>
                <Typography variant="listTitle" children={'Район: '} />
                <Typography variant="listContent" children={address.district} />
              </Grid>
            )}

            {address.fiat && (
              <Grid item>
                <Typography variant="listTitle" children={'Fiat: '} />
                <Typography variant="listContent" children={address.fiat} />
              </Grid>
            )}

            {address.date && (
              <Typography
                variant="subtext"
                children={'По состоянию на: ' + address.date}
              />
            )}
          </Grid>
        )}

        {registrationInfoNalog && (
          <Grid item container>
            <Grid item>
              <Typography variant="listTitle" children={'Налоговый орган: '} />
              <Typography
                variant="listContent"
                children={registrationInfoNalog.code}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="listTitle"
                children={'Дата постановки на учет: '}
              />
              <Typography
                variant="listContent"
                children={registrationInfoNalog.date}
              />
            </Grid>
          </Grid>
        )}

        {heads && (
          <Grid item container>
            {heads.map((head) => (
              <>
                <Grid item>
                  <Typography
                    variant="listTitle"
                    children={`${head.position}: `}
                  />
                  <Typography variant="listContent" children={head.fio} />
                </Grid>
                <Typography
                  variant="subtext"
                  children={'ИННФЛ: ' + head.innfl}
                />
                <Typography
                  variant="subtext"
                  children={'По состоянию на: ' + head.date}
                />
              </>
            ))}
          </Grid>
        )}

        {mainActivity && (
          <Grid item container>
            <Grid item>
              <Typography
                variant="listTitle"
                children={'Название вида деятельности: '}
              />
              <Typography variant="listContent" children={mainActivity.text} />
            </Grid>
            <Grid item>
              <Typography
                variant="listTitle"
                children={'Код вида деятельности: '}
              />
              <Typography variant="listContent" children={mainActivity.code} />
            </Grid>
          </Grid>
        )}

        {capitalSum && (
          <Grid item container>
            <Grid item>
              <Typography variant="listTitle" children={'Уставный капитал: '} />
              <Typography
                variant="listContent"
                children={capitalSum + ' руб.'}
              />
            </Grid>
            <Typography
              variant="subtext"
              children={'По состоянию на: ' + capitalDate}
            />
          </Grid>
        )}

        <Grid item container>
          <Grid item>
            <Typography variant="subtitle1" children={'Дополнительные коды'} />
          </Grid>
          {okpo && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКПО: '} />
              <Typography variant="listContent" children={okpo} />
            </Grid>
          )}

          {pfr && (
            <Grid item>
              <Typography variant="listTitle" children={'ПФР: '} />
              <Typography variant="listContent" children={pfr} />
            </Grid>
          )}

          {fss && (
            <Grid item>
              <Typography variant="listTitle" children={'ФСС: '} />
              <Typography variant="listContent" children={fss} />
            </Grid>
          )}

          {foms && (
            <Grid item>
              <Typography variant="listTitle" children={'ФОМС: '} />
              <Typography variant="listContent" children={foms} />
            </Grid>
          )}

          {okato && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКАТО: '} />
              <Typography variant="listContent" children={okato} />
            </Grid>
          )}

          {oktmo && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКТМО: '} />
              <Typography variant="listContent" children={oktmo} />
            </Grid>
          )}

          {okopf && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКОПФ: '} />
              <Typography variant="listContent" children={okopf} />
            </Grid>
          )}

          {okogu && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКОГУ: '} />
              <Typography variant="listContent" children={okogu} />
            </Grid>
          )}

          {okfs && (
            <Grid item>
              <Typography variant="listTitle" children={'ОКФС: '} />
              <Typography variant="listContent" children={okfs} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
