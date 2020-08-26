			/* START FIT_INPUT - only if STORE.FIT_INPUT does not have data for yesterday or does not exist */
					%IF %sysfunc(exist(STORE.FIT_INPUT)) %THEN %DO;
						PROC SQL NOPRINT; 
							SELECT MIN(DATE) INTO :FIRST_CASE FROM STORE.FIT_INPUT;
							SELECT MAX(DATE) into :LATEST_CASE FROM STORE.FIT_INPUT; 
						QUIT;
					%END;
					%ELSE %DO;
						%LET LATEST_CASE=0;
					%END;
				/* update the fit source (STORE.FIT_INPUT) if outdated */
					%IF &LATEST_CASE. < %eval(%sysfunc(today())-2) %THEN %DO;

/* START: STORE.FIT_INPUT READ */

P_IMPORT: fit_input_file.sas
D_IMPORT: fit_input_ohio.sas
T_IMPORT: fit_input_ohio.sas
U_IMPORT: fit_input_ohio.sas
B_IMPORT: fit_input_file.sas
 
/* END: STORE.FIT_INPUT READ */

					%END;
            /* END FIT_INPUT **/